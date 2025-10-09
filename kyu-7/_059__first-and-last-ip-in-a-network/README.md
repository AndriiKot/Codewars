# First and last IP in a network

**Rank:** 7 kyu  
**Category:** reference  
**URL:** [https://www.codewars.com/kata/5db5ff03d10bfa001da9cf2e](https://www.codewars.com/kata/5db5ff03d10bfa001da9cf2e)

---

## 📝 Description

## Task

Given a table where users' connections are logged, find the first and the last address of the networks they connected from.

## Notes
* Order the result by the `id` column
* There's no need to validate anything - it's okay if the user connects from a private network
* (You don't need the `connection_time` field for this task but without it the input data looks too dull)
* You can read more about IPv4 [on Wikipedia](https://en.wikipedia.org/wiki/IPv4) (check the [First and last subnet addresses](https://en.wikipedia.org/wiki/IPv4#First_and_last_subnet_addresses) section if you need an example/explanation related to this task only)

___

## Input table

```
---------------------------------------------
|    Table    |     Column      |   Type    |
|-------------+-----------------+-----------|
| connections | id              | int       |
|             | connection_time | timestamp |
|             | ip_address      | inet      |
---------------------------------------------
```

## Output table

```
------------------------
|    Column     | Type |
|---------------+------|
| id            | int  |
| first_address | text |
| last_address  | text |
------------------------
```

___

### Example

For the IP address `182.240.42.115/24` the first address in the network is `182.240.42.0/24`, and the last one is `182.240.42.255/24`.
