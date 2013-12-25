

require 'grape'

class AxApi < Grape::API

  helpers do
    def logger
      Grape::API.logger
    end
  end

  desc "Initial calendars load"
  get :calendars do
    File.read('models/calendars.json')
  end


  get :events do
    logger.info params
    {status: 'success'}
  end


end
