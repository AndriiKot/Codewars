# SQL with Harry Potter: Sorting Hat Comparators

**Rank:** 7 kyu  
**Category:** reference  
**URL:** [https://www.codewars.com/kata/5abcf0f930488ff1a6000b66](https://www.codewars.com/kata/5abcf0f930488ff1a6000b66)

---

## 📝 Description

There is truly no magic in the world; the Hogwarts Sorting Hat is SQL-based, its decision-making powers are common operators and prospectIve students are merely data - names, and two columns of qualities.

students
* id
* name
* quality1
* quality2

Slytherin are being quite strict this year and will only take students who are *evil* AND *cunning*.<br>
Gryffindor will take students who are *brave* but only if their second quality is NOT *evil*.<br>
Ravenclaw accepts students who are *studious* OR *intelligent*.<br>
Hufflepuff will simply take those who have the quality *hufflepuff*.

(don't worry, for simplicity's sake 'brave' and 'studious' will only appear in quality1, and 'cunning' and 'intelligent' will only appear in quality2.)

Return the *id, name, quality1* and *quality2* of all the students who'll be accepted, ordered by ascending id.
