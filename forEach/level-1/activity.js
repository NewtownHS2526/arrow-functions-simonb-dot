// ============================================
// FOREACH FUNCTION - LEVEL 1
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
WHAT IS THE forEach() FUNCTION?
================================
The forEach() function is used to EXECUTE A FUNCTION for each element 
in an array. Unlike map(), it doesn't return a new array - it's used 
for performing actions or side effects (like printing, updating variables, etc.).

Key Points:
- Executes a function for each element
- Does NOT return a new array (returns undefined)
- Used for side effects (console.log, updating variables, etc.)
- Original array stays unchanged
- Cannot use break or continue (use regular for loop if needed)
*/

/*
SYNTAX EXAMPLES
===============
*/

// One-Line Arrow Function
// array.forEach(element => { /* do something */ });

// Regular Arrow Function Style
// array.forEach((element) => {
//   /* do something */
// });

// Classic Function Style (for comparison)
// array.forEach(function(element) {
//   /* do something */
// });

/*
EXAMPLE 1: Printing Each Element
*/
const numbers1 = [1, 2, 3, 4, 5];

// One-line arrow function
console.log("Example 1 - One-line:");
numbers1.forEach(n => console.log(n));
// Output: 1, 2, 3, 4, 5 (each on a new line)

// Regular arrow function
console.log("Example 1 - Regular:");
numbers1.forEach((n) => {
  console.log(n);
});
// Output: 1, 2, 3, 4, 5 (each on a new line)

/*
EXAMPLE 2: Printing with Additional Text
*/
const names = ["Alice", "Bob", "Charlie"];

// One-line arrow function
console.log("Example 2 - One-line:");
names.forEach(name => console.log(`Hello, ${name}!`));
// Output: "Hello, Alice!", "Hello, Bob!", "Hello, Charlie!"

// Regular arrow function
console.log("Example 2 - Regular:");
names.forEach((name) => {
  console.log(`Hello, ${name}!`);
});
// Output: "Hello, Alice!", "Hello, Bob!", "Hello, Charlie!"

/*
EXAMPLE 3: Updating a Variable (Side Effect)
*/
let sum = 0;
const numbers2 = [10, 20, 30];

// One-line arrow function
numbers2.forEach(n => sum += n);
console.log("Example 3 - One-line sum:", sum); // 60

// Reset sum
sum = 0;

// Regular arrow function
numbers2.forEach((n) => {
  sum += n;
});
console.log("Example 3 - Regular sum:", sum); // 60

// ============================================
// EXERCISES
// ============================================

// ============================================
// EXERCISE SOLUTIONS
// ============================================

// EXERCISE 1 – Print Each Number Multiplied by 2

// One-line arrow function
exercise1Array.forEach(n => console.log(n * 2));

// Regular arrow function
exercise1Array.forEach((n) => {
  console.log(n * 2);
});

// --------------------------------------------

// EXERCISE 2 – Print Each Fruit in Uppercase

// One-line arrow function
exercise2Array.forEach(fruit => console.log(fruit.toUpperCase()));

// Regular arrow function
exercise2Array.forEach((fruit) => {
  console.log(fruit.toUpperCase());
});

// --------------------------------------------

// EXERCISE 3 – Calculate and Print the Sum

// One-line arrow function
exercise3Array.forEach(n => exercise3Sum += n);

// Regular arrow function (reset sum first)
exercise3Sum = 0;
exercise3Array.forEach((n) => {
  exercise3Sum += n;
});

console.log("Exercise 3 - Sum:", exercise3Sum);

// --------------------------------------------

// EXERCISE 4 – Print Colors with Text

// One-line arrow function
exercise4Array.forEach(color => console.log(`Color: ${color}`));

// Regular arrow function
exercise4Array.forEach((color) => {
  console.log(`Color: ${color}`);
});

// --------------------------------------------

// EXERCISE 5 – Print Each Number Squared

// One-line arrow function
exercise5Array.forEach(n => console.log(n * n));

// Regular arrow function
exercise5Array.forEach((n) => {
  console.log(n * n);
});
