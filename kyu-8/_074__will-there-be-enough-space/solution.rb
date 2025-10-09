def enough(cap, on, wait)
  [0, on + wait - cap].max
end    