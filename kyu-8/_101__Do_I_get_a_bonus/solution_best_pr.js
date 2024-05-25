function bonusTime(salary, bonus) {
  return "\u00A3" + (bonus ? salary * 10 : salary);
}

const bonusTime2 = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;
