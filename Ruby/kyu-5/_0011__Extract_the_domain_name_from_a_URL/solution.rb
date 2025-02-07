def domain_name(url)
  url[/^(?:https?:\/\/)?(?:www\.)?([^\.]+)/, 1]
end

p domain_name('https://www.zombie-bites.com')
p domain_name('http://google.com')
