function validateUsr(username) {
  const res = /^[a-z\d_]{4,16}$/.test(username);
  return res;
}
