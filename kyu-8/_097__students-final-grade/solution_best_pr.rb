def final_grade(exam, projects)
  case [exam, projects]
    in [91.., _] | [_, 11..] then 100
    in [76.., 5..] then 90
    in [51.., 2..] then 75
    else 0
  end
end