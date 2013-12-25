

require 'rack/test'
require 'minitest/autorun'

require './axapi'


class AxApiTest < Minitest::Unit::TestCase
  include Rack::Test::Methods

  def app
    AxApi.new
  end

  def test_events_get
    get '/events?limit=25&page=1&start=0&startDate=2013-12-01'
    # assert_equal "http://example.org/redirected", last_request.url
    # assert last_response.ok?
    assert_equal true, false
  end

end
