# SQL with Sailor Moon: Thinking about JOINs...

**Rank:** 7 kyu  
**Category:** reference  
**URL:** [https://www.codewars.com/kata/5ab7a736edbcfc8e62000007](https://www.codewars.com/kata/5ab7a736edbcfc8e62000007)

---

## 📝 Description

Practise some SQL fundamentals by making a simple database on a topic you feel familiar with. Or use mine, populated with a wealth of Sailor Moon trivia.

### `sailorsenshi` schema
* id
* senshi_name
* real_name_jpn
* school_id
* cat_id

### `cats` schema
* id
* name

### `schools` schema
* id
* school


Return a results table - *sailor_senshi, real_name, cat* and *school* - of all characters, containing each character's high school, their civilian name and the cat who introduced them to their magical crime-fighting destiny.

Keep in mind some senshi were not initiated by a cat guardian and one is not in high school. The field can be left blank if this is the case.
