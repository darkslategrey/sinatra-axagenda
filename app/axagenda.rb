
class AxAgenda < Sinatra::Base
  register Sinatra::AssetPack
# css
# /css/test-app.css
# /js/extjs/resources/css/ext-all.css
# /js/calendar/resources/css/extensible-all.css?_dc=1.6.0-rc.1
# /js/calendar/examples/examples.css?_dc=1.6.0-rc.1 

# js
# /js/calendar/Extensible-config.js 
# /js/calendar/App.js
# /js/calendar/examples/examples.js?_dc=1.6.0-rc.1
# /js/calendar/lib/extensible-all-debug.js?_dc=1.6.0-rc.1
# /js/extjs/locale/ext-lang-fr.js
# /js/calendar/src/locale/extensible-lang-fr.js?_dc=1.6.0-rc.1
# /js/extjs/ext-all-debug.js
# /js/calendar/data/Events.js?_dc=1387210227018
# /js/calendar/data/Calendars.js?_dc=1387210227020


  get '/' do
    send_file File.join(settings.public_folder, 'index.html')
  end
end

