const v1 = 50,
  v2 = 100,
  v3 = 150,
  v4 = 200,
  v5 = 2,
  v6 = 250;

function equal1() {
  const a = v1,
    b = v1;
  return a + b;
}

function equal2() {
  const a = v6, //set number value to a
    b = v3; //set number value to b
  return a - b;
}

function equal3() {
  const a = v1, //set number value to a
    b = v5; //set number value to b
  return a * b;
}

function equal4() {
  const a = v4, //set number value to a
    b = v5; //set number value to b
  return a / b;
}

function equal5() {
  const a = v2, //set number value to a
    b = v4; //set number value to b
  return a % b;
}
