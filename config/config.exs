# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :callisto,
  ecto_repos: [Callisto.Repo]

# Configures the endpoint
config :callisto, CallistoWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "yLZpXAhmawJU3ccSMrSsdOfsjQv4nlaFhWyWxuF48L7g7G+yU+3JwoFBuq4osza6",
  render_errors: [view: CallistoWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Callisto.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
