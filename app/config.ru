require 'rubygems'
require 'bundler/setup'

Bundler.require :default

require './axagenda'

# map '/' do
#   environment = Sprockets::Environment.new
#   environment.append_path 'public'
# end

# map '/' do
#   run AxAgenda
# end

run AxAgenda

