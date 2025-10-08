function shark1(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  if (dolphin) {
    sharkSpeed /= 2;
  }
  return pontoonDistance / youSpeed < sharkDistance / sharkSpeed ? 'Alive!' : 'Shark Bait!';
}

const shark2 = (pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) => {
  const youTime = pontoonDistance / youSpeed;
  const sharkTime = sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed);

  return sharkTime < youTime ? 'Shark Bait!' : 'Alive!';
};

// My solution
function shark3(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  let answer = '';
  const timeShark = sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed);
  const timeYou = pontoonDistance / youSpeed;
  const diffTime = timeShark - timeYou;
  answer = diffTime > 0 ? 'Alive!' : 'Shark Bait!';
  return answer;
}
