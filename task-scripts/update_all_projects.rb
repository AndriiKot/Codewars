﻿projects = {
 SQL: 'https://github.com/AndriiKot/SQL__CodeWars.git',
 JavaScript: 'https://github.com/AndriiKot/JavaScript__CodeWars.git',
}

update = "git subtree pull --prefix "

projects.each do |folder, git_repo| 
    system(`#{update}#{folder} #{git_repo} main`)
end
