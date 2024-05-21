function weatherInfo(temp) {
  var c = convertToCelsius(temp);
  let result;
  result =
    c < 0
      ? c + " is freezing temperature"
      : c + " is above freezing temperature";
  return result;
}

function convertToCelsius(temperature) {
  var celsius = ((temperature - 32) * 5) / 9;
  return celsius;
}
