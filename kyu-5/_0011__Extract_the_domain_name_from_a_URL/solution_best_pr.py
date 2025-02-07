import re
def domain_name(url):
    return re.search("(//|www.)(\w+)[.]", url).group(2)