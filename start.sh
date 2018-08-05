#!/bin/bash

export PORT=5422

cd ~/www/callisto
./bin/callisto stop || true
./bin/callisto start
