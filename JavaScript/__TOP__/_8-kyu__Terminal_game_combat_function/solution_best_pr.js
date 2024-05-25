const combat1 = (health, damage) => Math.max(0, health - damage);

function combat2(health, damage) {
  const result = health - damage;
  return result < 0 ? 0 : result;
}


