require 'open3'
require 'set'

def create_branches(depth = 1,path  = './',git_ignore_folders = nil)
    return if depth == 0
    git_ignore_folders ||= [].to_set
    Dir.entries(path).each do |el|         
        if el.match?('.gitignore')
            File.foreach(File.join(path,el)) do |line|
                    git_ignore_folders << line.delete("\uFEFF").strip
                end
         end            
   end
    folders = Dir.entries(path).reject do |el| 
        children_path = File.join(path,el)    
        begin
            el == "." || 
            el == ".."  || 
            File.file?(children_path) || 
            el == '.git' ||
            (git_ignore_folders.include? children_path.gsub!(/[^a-zA-Z_а-яА-Я]/, ''))
        end
    end

    stdout, stderr, status = Open3.capture3('git branch')
    str = stdout.encode('UTF-8')
    exists_branches = str.split("\n").map(&:strip)
    
    return if folders.size == 0
    folders.each do |branch|
        cmd = 'echo git branch '
            cmd += "#{branch}"
            unless exists_branches.include? (branch)
                p "Branch: #{branch} exits!"
                system(`#{cmd}`) 
            end
            system(`git push -u origin #{branch}`)
    end
    folders.size.times do |i, d = depth,p = path|
        children = File.join(p,folders[i])
        # next if children.match?('.git')
        create_branches(d - 1,children,git_ignore_folders) 
    end
end
 
create_branches(1)


