function cockroachSpeed(s) {
  return Math.floor((s * 100_000) / 3600);
}

console.log(cockroachSpeed(1.08));
