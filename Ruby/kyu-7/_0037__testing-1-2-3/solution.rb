def number lines
  lines.map.with_index(1) {|el, i| "#{i}: #{el}"}
end

