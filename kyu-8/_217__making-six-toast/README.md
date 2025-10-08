# Making Six Toast

**Rank:** unknown  
**Category:** algorithms  
**URL:** [https://www.codewars.com/kata/5835bb771342d120ae0001b4](https://www.codewars.com/kata/5835bb771342d120ae0001b4)

---

## 📝 Description

<b>This is the normal version of "Making Six Toast", the more easier one will be <a href="https://www.codewars.com/kata/5834fec22fb0ba7d080000e8/train/">here</a>.</b>

<h3 id="heading">STORY:</h3>

<p id="text">You want to make toast fast, you decide to put multiple pieces in the toasters at once. This time you have a limited amount of toasters and pieces of toast.</p>

<h3 id="heading">PROBLEM:</h3>

<p id="text">You are making six pieces of toast, first you want to make sure you have enough things to make six pieces of toast or if you have at least six pieces. Each toaster can toast two pieces of toast at once. Second, check how many pieces of toast you put in the toasters. Oh no! You didn't count how many you put in the toasters. Third, you need to count how many more (or less) toast you need, get enough toasters for six pieces of toast.</p>

<h3 id="heading">OBJECTIVE:</h3>

<p id="text">You'll be given an array, the first object in it is the amount of toast, the second gives you the amount of toasters you have. Another thing, if the array isn't completely full with variables then return 0.</p>

<h3 id="subheading">Example:</h3>

<p id="text">Let's say you have 4 pieces of toast and 0 toasters. ```sixToast([3, 1])```. It should return ```"2 pieces of toast and 3 toasters"``` because since you have 4 pieces of toast and 0 toasters, you need 3 more toasters (to make 6 pieces of toast) and need 2 more pieces of toast (for 6 pieces).</p>

<h3 id="subheading">Other examples:</h3>

```
// If you have six pieces of toast and 1 toaster it should return "0 pieces of toast and 2 toasters".
sixToast([6, 1]);

function sixToast(arr) {
  // code
  return "0 pieces of toast and 2 toasters";
}

// If you have 5 pieces of toast and -1 toasters it should still return "1 piece of toast and 3 toasters", not 4.
sixToast([5, -1]);

function sixToast(arr) {
  // code
  return "1 piece of toast and 3 toasters";
}

// If you have 7 pieces of toast and 6 toasters it should still return "0 pieces of toast and 0 toasters", not "-1 pieces of toast and -3 toasters".
sixToast([7, 6]);

function sixToast(arr) {
  // code
  return "0 pieces of toast and 0 toasters"
}
```

<h3 id="subheading">Requirements:</h3>

<p id="text">• A toaster can toast 2 pieces at once.</p>
<p id="text">• You plan to make 6 toast</p>

<h3 id="heading">Good Luck!</h3>
<style>
b {
  font-size: 17px;
  background-color: #000;
  padding: 7px;
}
#heading {
  font-size: 18px;
  text-align: center;
}
#subheading {
  font-size: 15px;
}
#text {
  font-size: 13px;
  margin-left: 4em;
}
</style>
