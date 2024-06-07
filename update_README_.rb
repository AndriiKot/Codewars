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
  overall_kyu = data['ranks']['overall']['name']
  honor = data['honor']
  position = data['leaderboardPosition']
  score = data['ranks']['overall']['score']
  total = data['codeChallenges']['totalCompleted']
  
  # template = "# #{user_name}\
  # \n#### Rank: #{overall_kyu}\
  # \n#### Honor: #{honor}\
  # \n#### Leaderboard Position: #{position}\
  # \n#### Total Completed Kata: #{total}"
  # File.open('./README.md', 'w+') do |f|
  #   f.puts(template)
  # end

  template = <<~EOF
  # #{user_name}
  ### Rank: #{overall_kyu}
  ### Honor: #{honor}
  ### Leaderboard Position: #{position}
  ### Total Completed Kata: #{total}
  EOF
  puts template
  File.open('./README_.md', 'w+') do |f|
    f.puts(template)
  end
end


