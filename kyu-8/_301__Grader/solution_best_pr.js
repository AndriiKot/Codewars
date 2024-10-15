function grader(score) {
  let result = "F";
  switch (true) {
    case 0.9 <= score && 1 >= score:
      result = "A";
      break;
    case 0.8 <= score && 0.9 > score:
      result = "B";
      break;
    case 0.7 <= score && 0.8 > score:
      result = "C";
      break;
    case 0.6 <= score && 0.7 > score:
      result = "D";
      break;
  }
  return result;
}
