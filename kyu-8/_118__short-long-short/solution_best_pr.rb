def solution(a, b)
  s, l = [a, b].minmax_by(&:size)
  s + l + s
end