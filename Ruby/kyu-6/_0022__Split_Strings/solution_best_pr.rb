
def solution str
  (str + '_').scan /../
end

# or

def solution(str) = "#{str}_".scan(/.{2}/)