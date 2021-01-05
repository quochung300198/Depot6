require "capistrano/setup"
require "capistrano/deploy"

require "capistrano/scm/git"
install_plugin Capistrano::SCM::Git

require "capistrano/rvm"

require "capistrano/puma"
install_plugin Capistrano::Puma  # Default puma tasks
install_plugin Capistrano::Puma::Daemon  # If you using puma daemonized (not supported in Puma 5+)

require "capistrano/bundler"
require "capistrano/rails/assets"
require "capistrano/rails/migrations"
require "capistrano/yarn"

Dir.glob("lib/capistrano/tasks/*.rake").each { |r| import r }