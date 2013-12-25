
class AxAgenda < Sinatra::Base

  set :environment, ENV['RACK_ENV']

  # Helper to eval config options in local scope.
  def self.require_all(dir, opts={})
    Dir["./#{dir}/*.rb"].each do |f|
      next if f.index 'deploy.rb'
      begin
        eval File.read f
      rescue Exception => e
        msg = e.message + " in #{f}."
        raise e.class.new(msg)
      end
    end
  end
  

  # Recursively require config and helpers.
  configure { self.require_all 'config'  }
  helpers   { self.require_all 'helpers' }

  
  # Require all available routes.
  self.require_all 'routes'

  self.require_all 'lib'
  
  # Require all database models.
  Dir["./models/*.rb"].each { |model| require model }

end

