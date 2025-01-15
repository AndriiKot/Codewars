def update(script)
  command = script.end_with?('.js') ? "node #{script}" : "ruby #{script}"
  
  system(command)
  if $?.exitstatus != 0
    puts "#{script} terminated with an error."
  else
    puts "#{script} executed successfully."
  end
end

update('./task-scripts/update_all_projects.rb')
update('./task-scripts/update_README_.rb')
update('./task-scripts/manager-package-version.js')  

system('git add package.json README.md')
system('git commit -m "UPDATE PROJECT"')


