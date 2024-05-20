function correctTail1(bod, tail) {
  return bod[bod.length - 1] === tail;
}

function correctTail2(body, tail) {
  const sub = body.substr(body.length - tail.length);
  return sub == tail;
}


