# The Dunning-Kruger effect

**Rank:** 7 kyu  
**Category:** reference  
**URL:** [https://www.codewars.com/kata/649f1fc4771a460058981959](https://www.codewars.com/kata/649f1fc4771a460058981959)

---

## 📝 Description

The Dunning-Kruger effect is a cognitive bias in which people wrongly overestimate their knowledge or ability in a specific area. This tends to occur because a lack of self-awareness prevents them from accurately assessing their skills.

Assume you have a PostgreSQL database with a table named "users". The "users" table has the following columns:

* `id` (integer): a unique identifier for each user.
* `name` (text): the name of the user.
* `perceived_skill_level` (integer): the user's self-assessed skill level, from 1 to 10.
* `actual_skill_level` (integer): the user's actual skill level, measured objectively, from 1 to 10.

Your task is to write an SQL query that does the following: 

* Selects only those users where the perceived skill level is greater than the actual skill level.
* For each of these users, calculates the difference between the perceived skill level and actual skill level as "skill_overestimation".
* Adds a "overconfidence_category" message based on the degree of skill overestimation*
    * 'Mild case of overconfidence': skill overestimation is 2 or less
    * 'Moderate case of overconfidence': skill overestimation is greater than 2 and up to 5
    * 'Serious case of overconfidence': skill overestimation is greater than 5 and up to 7
    * 'Extreme case of Dunning-Kruger effect detected!': skill overestimation is more than 7
    
You should return the following columns: 

* `id`: A unique identifier for each user. Used for sorting if overconfidence levels are equal.
* `name`: The user's name. Included for easy identification of each result.
* `skill_overestimation`: The computed difference between a user's perceived and actual skill levels. It measures the degree of overconfidence.
* `overconfidence_category`: categorization of overconfidence, as described above

The query should order the result first by skill overestimation in descending order, and in the case of a tie, by user id in descending  order.  

To make a task a bit funnier, for random tests, I scrapped the usernames of the current top 100 Codewars users - let's see which of the Codewars stars have an extreme case of Dunning-Kruger effect :-)

GLHF! 

### Desired Output

The desired output should look like this:

<table><!----><tr><th>id</th><th>name</th><th>skill_overestimation</th><th>overconfidence_category</th></tr><tr><td>98</td><td>dcieslak</td><td>9</td><td>Extreme case of Dunning-Kruger effect detected!</td></tr><tr><td>95</td><td>dinglemouse</td><td>9</td><td>Extreme case of Dunning-Kruger effect detected!</td></tr><tr><td>69</td><td>monadius</td><td>8</td><td>Extreme case of Dunning-Kruger effect detected!</td></tr></table>
...
