// ============================================
// REDUCE FUNCTION - LEVEL 1
// ============================================

/*
WHAT IS AN ARRAY?
================
An array is a special variable that can hold multiple values at once. 
Think of it like a list or a collection of items. Arrays are ordered, 
meaning each item has a position (called an index) starting from 0.

Example:
const numbers = [1, 2, 3, 4, 5];
const names = ["Alice", "Bob", "Charlie"];
const mixed = [1, "hello", true, 42];
*/

/*
WHAT IS THE reduce() FUNCTION?
===============================
The reduce() function is used to REDUCE an array to a single value by 
applying a function to each element and accumulating the result. It's 
like combining all elements into one value.

Key Points:
- Reduces an array to a single value
- Takes an accumulator (starting value) and current element
- Returns a single value (number, string, object, etc.)
- Very flexible - can be used for summing, finding max, concatenating, etc.
- Original array stays unchanged
*/

/*
SYNTAX EXAMPLES
===============
*/

// One-Line Arrow Function
// const result = array.reduce((accumulator, element) => accumulator + element, initialValue);

// Regular Arrow Function Style
// const result = array.reduce((accumulator, element) => {
//   return accumulator + element;
// }, initialValue);

// Classic Function Style (for comparison)
// const result = array.reduce(function(accumulator, element) {
//   return accumulator + element;
// }, initialValue);

/*
EXAMPLE 1: Summing Numbers
*/
const numbers1 = [1, 2, 3, 4, 5];

// One-line arrow function
const sum1 = numbers1.reduce((acc, n) => acc + n, 0);
console.log("Example 1 - One-line:", sum1); // 15

// Regular arrow function
const sum2 = numbers1.reduce((acc, n) => {
  return acc + n;
}, 0);
console.log("Example 1 - Regular:", sum2); // 15

/*
EXAMPLE 2: Finding Maximum Number
*/
const numbers2 = [10, 25, 5, 30, 15];

// One-line arrow function
const max1 = numbers2.reduce((acc, n) => n > acc ? n : acc, numbers2[0]);
console.log("Example 2 - One-line:", max1); // 30

// Regular arrow function
const max2 = numbers2.reduce((acc, n) => {
  return n > acc ? n : acc;
}, numbers2[0]);
console.log("Example 2 - Regular:", max2); // 30

/*
EXAMPLE 3: Concatenating Strings
*/
const words = ["Hello", "World", "JavaScript"];

// One-line arrow function
const sentence1 = words.reduce((acc, word) => acc + " " + word, "");
console.log("Example 3 - One-line:", sentence1.trim()); // "Hello World JavaScript"

// Regular arrow function
const sentence2 = words.reduce((acc, word) => {
  return acc + " " + word;
}, "");
console.log("Example 3 - Regular:", sentence2.trim()); // "Hello World JavaScript"

// ============================================
// EXERCISES
// ============================================

/*
EXERCISE 1 – Sum of all numbers
*/

// One-line arrow function
const exercise1Result1 = exercise1Array.reduce((sum, curr) => sum + curr);

// Regular arrow function
const exercise1Result2 = exercise1Array.reduce((sum, curr) => {
  return sum + curr;
});

console.log("Exercise 1 - One-line:", exercise1Result1);
console.log("Exercise 1 - Regular:", exercise1Result2);
// Expected: 15

/*
EXERCISE 2 – Product of all numbers
*/

// One-line arrow function
const exercise2Result1 = exercise2Array.reduce((product, curr) => product * curr);

// Regular arrow function
const exercise2Result2 = exercise2Array.reduce((product, curr) => {
  return product * curr;
});

console.log("Exercise 2 - One-line:", exercise2Result1);
console.log("Exercise 2 - Regular:", exercise2Result2);
// Expected: 240000

// Expected: 240000

// ============================================
// EXERCISE 3 – Concatenate Strings with Commas
// ============================================

// One-line arrow function
const exercise3Result1 = exercise3Array.reduce((acc, curr) => acc + ',' + curr);

// Regular arrow function
const exercise3Result2 = exercise3Array.reduce((acc, curr) => {
  return acc + ',' + curr;
});

console.log("Exercise 3 - One-line:", exercise3Result1);
console.log("Exercise 3 - Regular:", exercise3Result2);
// Expected: "apple,banana,orange"

// ============================================
// EXERCISE 4 – Find Maximum Number
// ============================================

// One-line arrow function
const exercise4Result1 = exercise4Array.reduce((max, curr) => curr > max ? curr : max);

// Regular arrow function
const exercise4Result2 = exercise4Array.reduce((max, curr) => {
  if (curr > max) {
    return curr;
  } else {
    return max;
  }
});

console.log("Exercise 4 - One-line:", exercise4Result1);
console.log("Exercise 4 - Regular:", exercise4Result2);
// Expected: 35

// ============================================
// EXERCISE 5 – Sum All Numbers with Initial Value 10
// ============================================

// One-line arrow function
const exercise5Result1 = exercise5Array.reduce((sum, curr) => sum + curr, 10);

// Regular arrow function
const exercise5Result2 = exercise5Array.reduce((sum, curr) => {
  return sum + curr;
}, 10);

console.log("Exercise 5 - One-line:", exercise5Result1);
console.log("Exercise 5 - Regular:", exercise5Result2);
// Expected: 30

