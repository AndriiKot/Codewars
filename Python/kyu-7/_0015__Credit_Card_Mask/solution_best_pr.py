import re

def maskify(cc):
  return re.sub(r'.(?=.{4})', '#', cc)


print(maskify('64607935616'))