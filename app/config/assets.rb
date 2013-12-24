register Sinatra::AssetPack


assets do
  serve '/css', from: 'public/css'
  serve '/img', from: 'public/img'
  serve '/js',  from: 'public/js'
  
  js :application, '/js/app.js', [ '/js/calendar/Extensible-config.js',
                                   '/js/calendar/App.js',
                                   '/js/calendar/examples/examples.js',
                                   '/js/calendar/lib/extensible-all-debug.js',
                                   '/js/extjs/locale/ext-lang-fr.js',
                                   '/js/calendar/src/locale/extensible-lang-fr.js',
                                   '/js/extjs/ext-all-debug.js',
                                   '/js/calendar/data/Events.js',
                                   '/js/calendar/data/Calendars.js' ]

  css :application, '/css/app.css', [ '/css/test-app.css',
                                      '/js/extjs/resources/css/ext-all.css',
                                      '/js/calendar/resources/css/extensible-all.css',
                                      '/js/calendar/examples/examples.css' ]
  js_compression  :uglify
  css_compression :simple
  
end
