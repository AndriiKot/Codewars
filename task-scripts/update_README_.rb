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
  
  time = Time.now
 
  template = <<~EOF
  # [#{user_name}](https://www.codewars.com/users/AndriiKot)

  ## [CodeWars Profile](https://www.codewars.com/users/AndriiKot)

  #### As of #{time.strftime("%Y-%m-%d %H:%M:%S")} uploaded:

  ### General Statistics

  #### Rank: #{overall_kyu}

  #### Honor: #{honor}

  #### Score: #{score}

  #### Leaderboard Position: #{position}

  #### Total Completed Kata: #{total}


  EOF

  hash_languages = data["ranks"]["languages"]
  hash_convert = { 'sql' => 'SQL', 'javascript' => 'JavaScript', }
  hash_links = {'sql' => 'https://github.com/AndriiKot/SQL__CodeWars', 'javascript' => 'https://github.com/AndriiKot/JavaScript__CodeWars'}
  hash_languages.each do |key, value|
    template += <<~EOF  
    
    ## [#{hash_convert[key]}](#{hash_links[key]})

    #### Rank: #{value['name']}

    #### Score: #{value['score']}

    EOF
  end

end

File.open('./README.md', 'w+') do |f|
  f.puts(template)
end
