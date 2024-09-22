function finalGrade(exam, projects) {
  let grade;
  if (exam > 90 || projects > 10) {
    grade = 100;
  } else if (exam > 75 && projects >= 5) {
    grade = 90;
  } else if (exam > 50 && projects >= 2) {
    grade = 75;
  } else {
    grade = 0;
  }
  return grade;
}
