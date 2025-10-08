function areYouPlayingBanjo1(name) {
  let answer = '';
  if (/[rR]/.test(name[0])) {
    answer = name + ' plays banjo';
  } else {
    answer = name + ' does not play banjo';
  }
  return answer;
}

function areYouPlayingBanjo2(name) {
  return name + (/^r/i.test(name) ? ' plays ' : ' does not play ') + 'banjo';
}
