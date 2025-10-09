PLANETS = {
  1 => "Mercury",
  2  => "Venus",
  3  => "Earth",
  4  => "Mars",
  5  => "Jupiter",
  6  => "Saturn",
  7  => "Uranus",
  8  => "Neptune",
  9  => "Pluto"
}.freeze

def get_planet_name(id) = PLANETS[id]


# or

def get_planet_name(id)
  %w[0 Mercury Venus Earth Mars Jupiter Saturn Uranus Neptune][id]
end