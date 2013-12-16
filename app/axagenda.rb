
class AxAgenda < Sinatra::Base

  register Sinatra::AssetPack

  assets do
    serve '/js',        :from => 'assets/js'
    serve '/css',       :from => 'assets/css' 
    serve '/image',     :from => 'assets/images'

    js :application, '/js/axagenda.js', [ 'js/**/*.js' ]
    css :application, '/css/axagenda.css', [ 'css/**/*.css' ]

    js_compression :jsmin
    css_compression :simple
  end

  get '/' do
    send_file File.join(settings.public_folder, 'index.html')
  end
end

