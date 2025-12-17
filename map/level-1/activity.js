// ============================================
// MAP FUNCTION - LEVEL 1
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
WHAT IS THE map() FUNCTION?
===========================
The map() function is used to TRANSFORM every element in an array and 
create a new array with the transformed values. It doesn't change the 
original array - it returns a brand new array.

Key Points:
- Takes each element from the original array
- Applies a function to transform it
- Returns a new array with the same length
- Original array stays unchanged
*/

/*
SYNTAX EXAMPLES
===============
*/

// One-Line Arrow Function
// const newArray = array.map(element => transformedElement);

// Regular Arrow Function Style
// const newArray = array.map((element) => {
//   return transformedElement;
// });

// Classic Function Style (for comparison)
// const newArray = array.map(function(element) {
//   return transformedElement;
// });

// ============================================
// EXERCISE SOLUTIONS
// ============================================

// EXERCISE 1 – Multiply Each Number by 3

// One-line arrow function
const exercise1Result1 = exercise1Array.map(n => n * 3);

// Regular arrow function
const exercise1Result2 = exercise1Array.map((n) => {
  return n * 3;
});

console.log("Exercise 1 - One-line:", exercise1Result1);
console.log("Exercise 1 - Regular:", exercise1Result2);

// --------------------------------------------

// EXERCISE 2 – Add "!" to Each String

// One-line arrow function
const exercise2Result1 = exercise2Array.map(word => `${word}!`);

// Regular arrow function
const exercise2Result2 = exercise2Array.map((word) => {
  return `${word}!`;
});

console.log("Exercise 2 - One-line:", exercise2Result1);
console.log("Exercise 2 - Regular:", exercise2Result2);

// --------------------------------------------

// EXERCISE 3 – Divide Each Number by 2

// One-line arrow function
const exercise3Result1 = exercise3Array.map(n => n / 2);

// Regular arrow function
const exercise3Result2 = exercise3Array.map((n) => {
  return n / 2;
});

console.log("Exercise 3 - One-line:", exercise3Result1);
console.log("Exercise 3 - Regular:", exercise3Result2);

// --------------------------------------------

// EXERCISE 4 – Uppercase and Pluralize Strings

// One-line arrow function
const exercise4Result1 = exercise4Array.map(word => word.toUpperCase() + "s");

// Regular arrow function
const exercise4Result2 = exercise4Array.map((word) => {
  return word.toUpperCase() + "s";
});

console.log("Exercise 4 - One-line:", exercise4Result1);
console.log("Exercise 4 - Regular:", exercise4Result2);

// --------------------------------------------

// EXERCISE 5 – Square Each Number

// One-line arrow function
const exercise5Result1 = exercise5Array.map(n => n * n);

// Regular arrow function
const exercise5Result2 = exercise5Array.map((n) => {
  return n * n;
});

console.log("Exercise 5 - One-line:", exercise5Result1);
console.log("Exercise 5 - Regular:", exercise5Result2);
