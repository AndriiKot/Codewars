function correctTail(body, tail) {
  const sub = body.substr(body.length - tail.length);
  return sub == tail;
}
