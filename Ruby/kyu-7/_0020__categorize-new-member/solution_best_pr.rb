def openOrSenior(data)
  data.map { |age, handicap| age >= 55 && handicap > 7 ? "Senior" : "Open" }
end