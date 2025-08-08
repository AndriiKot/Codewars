from types import MappingProxyType

PLANETS = MappingProxyType({
  1 : "Mercury",
  2 : "Venus",
  3 : "Earth",
  4 : "Mars",
  5 : "Jupiter",
  6 : "Saturn",
  7 : "Uranus",
  8 : "Neptune",
  9 : "Pluto"
})

def get_planet_name(id):
    return PLANETS[id]