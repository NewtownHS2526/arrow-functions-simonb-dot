// ============================================
// FILTER FUNCTION - LEVEL 1
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
WHAT IS THE filter() FUNCTION?
===============================
The filter() function is used to CREATE A NEW ARRAY with only the elements 
that pass a test (condition). It filters out elements that don't meet the 
criteria, keeping only the ones that do.

Key Points:
- Tests each element against a condition
- Returns a NEW array (doesn't change the original)
- Only includes elements where the condition is true
- The new array can be shorter than the original
- Original array stays unchanged
*/

/*
SYNTAX EXAMPLES
===============
*/

// One-Line Arrow Function
// const newArray = array.filter(element => condition);

// Regular Arrow Function Style
// const newArray = array.filter((element) => {
//   return condition;
// });

// Classic Function Style (for comparison)
// const newArray = array.filter(function(element) {
//   return condition;
// });

/*
EXAMPLE 1: Filtering Even Numbers
*/
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8];

// One-line arrow function
const evens1 = numbers1.filter(n => n % 2 === 0);
console.log("Example 1 - One-line:", evens1); // [2, 4, 6, 8]

// Regular arrow function
const evens2 = numbers1.filter((n) => {
  return n % 2 === 0;
});
console.log("Example 1 - Regular:", evens2); // [2, 4, 6, 8]

/*
EXAMPLE 2: Filtering Long Strings
*/
const words = ["cat", "dog", "elephant", "bird", "mouse"];

// One-line arrow function
const longWords1 = words.filter(word => word.length > 3);
console.log("Example 2 - One-line:", longWords1); // ["elephant", "bird", "mouse"]

// Regular arrow function
const longWords2 = words.filter((word) => {
  return word.length > 3;
});
console.log("Example 2 - Regular:", longWords2); // ["elephant", "bird", "mouse"]

/*
EXAMPLE 3: Filtering Numbers Greater Than a Value
*/
const numbers2 = [10, 25, 5, 30, 15, 40];

// One-line arrow function
const bigNumbers1 = numbers2.filter(n => n > 20);
console.log("Example 3 - One-line:", bigNumbers1); // [25, 30, 40]

// Regular arrow function
const bigNumbers2 = numbers2.filter((n) => {
  return n > 20;
});
console.log("Example 3 - Regular:", bigNumbers2); // [25, 30, 40]

// ============================================
// EXERCISES
// ============================================

// EXERCISE 1 – Odd Numbers
const exercise1Result1 = exercise1Array.filter(n => n % 2 !== 0);

const exercise1Result2 = exercise1Array.filter((n) => {
  return n % 2 !== 0;
});

console.log("Exercise 1 - One-line:", exercise1Result1);
console.log("Exercise 1 - Regular:", exercise1Result2);

// --------------------------------------------

// EXERCISE 2 – Fruits with 5 or More Letters
const exercise2Result1 = exercise2Array.filter(fruit => fruit.length >= 5);

const exercise2Result2 = exercise2Array.filter((fruit) => {
  return fruit.length >= 5;
});

console.log("Exercise 2 - One-line:", exercise2Result1);
console.log("Exercise 2 - Regular:", exercise2Result2);

// --------------------------------------------

// EXERCISE 3 – Numbers Greater Than 10
const exercise3Result1 = exercise3Array.filter(n => n > 10);

const exercise3Result2 = exercise3Array.filter((n) => {
  return n > 10;
});

console.log("Exercise 3 - One-line:", exercise3Result1);
console.log("Exercise 3 - Regular:", exercise3Result2);

// --------------------------------------------

// EXERCISE 4 – Colors Starting with "b"
const exercise4Result1 = exercise4Array.filter(color => color.startsWith("b"));

const exercise4Result2 = exercise4Array.filter((color) => {
  return color.startsWith("b");
});

console.log("Exercise 4 - One-line:", exercise4Result1);
console.log("Exercise 4 - Regular:", exercise4Result2);

// --------------------------------------------

// EXERCISE 5 – Numbers Divisible by 4
const exercise5Result1 = exercise5Array.filter(n => n % 4 === 0);

const exercise5Result2 = exercise5Array.filter((n) => {
  return n % 4 === 0;
});

console.log("Exercise 5 - One-line:", exercise5Result1);
console.log("Exercise 5 - Regular:", exercise5Result2);
