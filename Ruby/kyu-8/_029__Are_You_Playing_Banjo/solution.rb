def are_you_playing_banjo(name)
  name.match?(/^r/i) ? "#{name} plays banjo" : "#{name} does not play banjo"
end

p are_you_playing_banjo('R Andrii')