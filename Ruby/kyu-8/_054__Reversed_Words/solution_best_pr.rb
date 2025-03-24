def solution1(sentence)
  sentence.split(' ').reverse * ' '
end

def solution2(sentance)
  sentance.split(/\s+/).reverse.join(' ');
end