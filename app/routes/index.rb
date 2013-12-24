


get '/' do
  haml :index
  # send_file File.join(settings.public_folder, 'index.html')
end

