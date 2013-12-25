
require 'logger'


set :logging, true

class ::Logger
  alias_method :write, :<<
end # for Rack::CommonLogger


$logger = ::Logger.new('log/app.log')

use Rack::CommonLogger, $logger




