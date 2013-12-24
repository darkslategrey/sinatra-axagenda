

# Notes sur les Gems

* foreman (http://ddollar.github.io/foreman)

	Start one instance of each process type, interleave the output on stdout:

		$ foreman start

	Export the application in upstart format:
	
		$ foreman export upstart /etc/init

	Run one process type from the application defined in a specific Procfile:

		$ foreman start alpha -p ~/myapp/Procfile


* capybara (http://jnicklas.github.com/capybara/)

	Acceptance test framework for web applications

	Examples:

		click_link('id-of-link')
		click_link('Link Text')
		click_button('Save')
		click_on('Link Text') # clicks on either links or buttons
		click_on('Button Value')

	Minitest integration (Ruby >= 1.9)

		page.must_have_content('Important!')

* poltergeist

	Another headless driver which integrates Capybara with
    PhantomJS. It is truly headless, so doesn't require Xvfb to run on
    your CI server. It will also detect and report any Javascript
    errors that happen within the page.

* phantomjs

   headless WebKit browser

* shotgun

	The shotgun command starts one of Rack's supported servers (e.g.,
	mongrel, thin, webrick) and listens for requests but does not load
	any part of the actual application. 
	Each time a request is received, it forks, loads the application
	in the child process, processes the request, and exits the child
	process. The result is clean, application-wide reloading of all
	source files and templates on each request.



