def solution(sentence)
  sentence.split.reverse.join(' ')
end

p solution("The greatest victory is that which requires no battle")