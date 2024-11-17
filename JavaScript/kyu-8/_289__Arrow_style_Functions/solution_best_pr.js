// Best Praxe
{
  const ArrowFunc = (arr) => String.fromCharCode(...arr);
}

{
  var ArrowFunc = (arr) => String.fromCharCode.apply(String, arr);
}

// My Solution
{
  const ArrowFunc = (arr) => {
    return arr.map((el) => String.fromCharCode(el)).join(''); //Complete this function
  };
}
