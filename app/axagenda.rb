
class AxAgenda < Sinatra::Base
  get '/' do
    send_file File.join(settings.public_folder, 'index.html')
  end
end
