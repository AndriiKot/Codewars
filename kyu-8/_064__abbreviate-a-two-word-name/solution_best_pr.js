function abbrevName1(name) {
  return name
    .split(' ')
    .map((i) => i[0].toUpperCase())
    .join('.');
}

function abbrevName2(name) {
  var nameArray = name.split(' ');
  return (nameArray[0][0] + '.' + nameArray[1][0]).toUpperCase();
}
