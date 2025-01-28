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

  kyu_5, kyu_6, kyu_7, kyu_8 = "./kyu-5/", "./kyu-6/", "./kyu-7/", "./kyu-8/"
  folders_count_5 = Dir.glob("#{kyu_5}/*").count
  folders_count_6 = Dir.glob("#{kyu_6}/*").count
  folders_count_7 = Dir.glob("#{kyu_7}/*").count
  folders_count_8 = Dir.glob("#{kyu_8}/*").count

  time = Time.now


  hash_languages.each do |key, value|
    if key == 'ruby'
      template += <<~EOF
        ## Ruby

        ##### As of #{time.strftime("%Y-%m-%d %H:%M:%S")} uploaded:

        #### Ruby rank: #{value['name']}

        #### Ruby score: #{value['score']}

        ##### [5-kyu: #{folders_count_5}](https://github.com/AndriiKot/Ruby__CodeWars/tree/main/kyu-5)
  
        ##### [6-kyu: #{folders_count_6}](https://github.com/AndriiKot/Ruby__CodeWars/tree/main/kyu-6)

        ##### [7-kyu: #{folders_count_7}](https://github.com/AndriiKot/Ruby__CodeWars/tree/main/kyu-7)

        ##### [8-kyu: #{folders_count_8}](https://github.com/AndriiKot/Ruby__CodeWars/tree/main/kyu-8)
        
      EOF
    end
  end

end

File.open('./README.md', 'w+') do |f|
  f.puts(template)
end

