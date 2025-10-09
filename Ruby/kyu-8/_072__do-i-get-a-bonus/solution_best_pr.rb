def bonus_time(salary, bonus)
  "$#{bonus ? salary * 10 : salary}"
end

# or

def bonus_time(salary, bonus)
  "$#{salary * (bonus ? 10 : 1)}"
end