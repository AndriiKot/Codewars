function areYouPlayingBanjo(name) {
  let answer = '';
  if (/[rR]/.test(name[0])) {
    answer = name + ' plays banjo';
  } else {
    answer = name + ' does not play banjo';
  }
  return answer;
}
