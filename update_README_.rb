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
  
  template = "# #{user_name}\
  \n## Rank: #{overall_kyu}\
  \n## Honor: #{honor}\
  \n## Leaderboard Position: #{position}\
  \n## Total Completed Kata: #{total}"
  File.open('./README.md', 'w+') do |f|
    f.puts(template)
  end
end


# Rank:5 kyu
# Honor:598
# Leaderboard Position:#84,195
# Honor Percentile:Top 13.115%
# Total Completed Kata:250


# Overall:5 kyu / 68.1%
# JavaScript:5 kyu / 51.7%
# SQL:6 kyu / 34.0%

