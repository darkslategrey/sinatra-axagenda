ENV["RACK_ENV"] = "test"

require 'bundler'
Bundler.require :default, :test

# require 'simplecov'
# require 'coveralls'
require 'minitest/autorun'
require 'minitest/pride'
require 'minitest/spec'
# require 'mocha/setup'

# SimpleCov.start 'minitest-specs'
# Coveralls.wear!('rails')

# Load the sinatra application
require_relative '../axapi'

class UnitTest < MiniTest::Spec

  register_spec_type(/(Unit|Spec|Model)$/, self)

  register_spec_type(self) do |desc|
    true if desc.is_a?(Class)
  end
end
