require 'rubygems'
require 'bundler/setup'

Bundler.require :default, :databases, ENV['RACK_ENV'], :assets, :deployment

require './axagenda'
require './axapi'

enable :run, :logging

use Rack::ShowExceptions

run Rack::Cascade.new [AxApi, AxAgenda]


