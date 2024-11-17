function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  let answer = '';
  const timeShark = sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed);
  const timeYou = pontoonDistance / youSpeed;
  const diffTime = timeShark - timeYou;
  answer = diffTime > 0 ? 'Alive!' : 'Shark Bait!';
  return answer;
}
