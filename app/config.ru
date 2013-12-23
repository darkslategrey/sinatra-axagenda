require 'rubygems'
require 'bundler/setup'

Bundler.require :default, :databases, ENV['RACK_ENV'], :assets, :deployment

require './axagenda'

use Rack::ShowExceptions

run AxAgenda

