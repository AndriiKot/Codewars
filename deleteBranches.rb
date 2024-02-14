require 'open3'

def delete_branches(del_branches = [])
    return if del_branches.size == 0


    stdout, stderr, status = Open3.capture3('git branch')
    str = stdout.encode('UTF-8')
    exists_branches = str.split("\n").map(&:strip)

    del_branches.map! do |del_el|
       exists_branches.reject { |el| !el.start_with?(del_el)} 
    end.flatten!

    del_branches.each do |branch|
        next if branch.start_with?('*') 
        cmd_local = "git branch -D #{branch}"
        cmd_server = "git push origin --delete #{branch}"
        # p cmd_local,cmd_server
                system(`#{cmd_local}`) 
                system(`#{cmd_server}`)
    end
end
 
delete_branches(ARGV)


