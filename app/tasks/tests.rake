

require 'rake/testtask'

Rake::TestTask.new do |t|
  # t.libs << "."
  t.test_files = FileList['spec/**/*_spec.rb']
end


