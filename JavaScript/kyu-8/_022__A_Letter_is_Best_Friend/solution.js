function bestFriend(txt, a, b) {
  if (!txt) return true;
  if (txt.includes(b) && !txt.includes(a)) return true;
  if (!txt.includes(a) && !txt.includes(b)) return true;
  if (a === b) return false;
  const regex = new RegExp(`${a}.`, 'g');
  const arr = txt.match(regex) || [];
  if (arr.length != txt.split(a).length - 1) return false;
  try {
    arr.forEach((element) => {
      if (element != `${a}${b}`) {
        throw new Error('Condition met');
      }
    });
  } catch (error) {
    return false;
  }
  return true;
}
