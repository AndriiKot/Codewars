def update(script)
  system(`ruby #{script}`)
  if $?.exitstatus != 0
    puts "#{script} terminated with an error."
  else
    puts "#{script} executed successfully."
  end
end

update('./task-scripts/update_all_projects.rb')
update('./task-scripts/update_README_.rb.rb')

