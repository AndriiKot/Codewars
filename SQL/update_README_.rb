require 'net/http'
require 'json'

url = URI.parse('https://www.codewars.com/api/v1/users/AndriiKot')
http = Net::HTTP.new(url.host, url.port)
http.use_ssl = (url.scheme == 'https')

request = Net::HTTP::Get.new(url.request_uri)

response = http.request(request)

if response.code == '200'
  res = response.body

  data = JSON.parse(res)
  
  user_name = data['username']
  
  template = "# [#{user_name}](https://www.codewars.com/users/AndriiKot) \n"

  hash_languages = data["ranks"]["languages"]

  kyu_7, kyu_8 = "./kyu-7/", "./kyu-8/"
  folders_count_7 = Dir.glob("#{kyu_7}/*").count
  folders_count_8 = Dir.glob("#{kyu_8}/*").count

  time = Time.now

  hash_languages.each do |key, value|
    if key == 'sql'
      template += <<~EOF  
        ## SQL
        ##### As of #{time.strftime("%Y-%m-%d %H:%M:%S")} uploaded:
        #### SQL rank: #{value['name']}
        #### SQL score: #{value['score']}
        ##### [7-kyu: #{folders_count_7}](https://github.com/AndriiKot/SQL__CodeWars/tree/main/kyu-7)
        ##### [8-kyu: #{folders_count_8}](https://github.com/AndriiKot/SQL__CodeWars/tree/main/kyu-8)
      EOF
    end
  end

end

File.open('./README.md', 'w+') do |f|
  f.puts(template)
end


system(`git add .`)
system(`git commit -m "SQL CodeWars 'Current Status ' or 'README.md update"`)
system(`git push`)

