function getGrade(s1, s2, s3) {
  const avg = (s1 + s2 + s3) / 3;
  let grade = '';
  switch (avg >= 0) {
    case avg < 60:
      grade = 'F';
      break;
    case avg < 70:
      grade = 'D';
      break;
    case avg < 80:
      grade = 'C';
      break;
    case avg < 90:
      grade = 'B';
      break;
    case avg <= 100:
      grade = 'A';
      break;
  }
  return grade;
}
