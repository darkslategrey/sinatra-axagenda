register Sinatra::AssetPack


assets do
  serve '/css', from: 'public/css'
  serve '/img', from: 'public/img'
  
  js :vendor, '/js/vendor.js', [
    '/js/vendor/jquery.1.7.2.js',
    '/js/vendor/bootstrap.js'
  ]
  
  js :application, '/js/app.js', [
    '/js/app/*.js'
  ]

  css :application, '/css/app.css', [
    '/css/app/*.css'
  ]
    
  css :vendor, '/css/vendor.css', [
    '/css/vendor/bootstrap.css'
  ]
  
  js_compression  :uglify
  css_compression :simple
  
end
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

