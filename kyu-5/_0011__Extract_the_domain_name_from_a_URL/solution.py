import re
def domain_name(url):
    return re.sub(r"^(?:https?://)?(?:www\.)?([^\.]+).*", r"\1", url)

print(domain_name('https://www.zombie-bites.com'))
print(domain_name('http://google.com'))
