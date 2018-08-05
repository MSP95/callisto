#!/bin/bash

export PORT=5422
export MIX_ENV=prod
export GIT_PATH=/home/manish/src/callisto

PWD=`pwd`
if [ $PWD != $GIT_PATH ]; then
	echo "Error: Must check out git repo to $GIT_PATH"
	echo "  Current directory is $PWD"
	exit 1
fi

if [ $USER != "manish" ]; then
	echo "Error: must run as user 'manish'"
	echo "  Current user is $USER"
	exit 2
fi

mix deps.get
(cd assets && npm install)
(cd assets && ./node_modules/brunch/bin/brunch b -p)
mix phx.digest
mix release --env=prod

mkdir -p ~/www
mkdir -p ~/old

NOW=`date +%s`
if [ -d ~/www/callisto ]; then
	echo mv ~/www/callisto ~/old/$NOW
	mv ~/www/callisto ~/old/$NOW
fi

mkdir -p ~/www/callisto
REL_TAR=~/src/callisto/_build/prod/rel/jobPortal/releases/0.0.1/callisto.tar.gz
(cd ~/www/callisto && tar xzvf $REL_TAR)

crontab - <<CRONTAB
@reboot bash /home/manish/src/jobPortal/start.sh
CRONTAB

#. start.sh
