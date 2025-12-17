// ============================================
// MAP FUNCTION - LEVEL 2
// ============================================
// ============================================
// EXERCISE SOLUTIONS
// ============================================

// EXERCISE 1 – Extract Names from Objects

// One-line arrow function
const exercise1Result1 = exercise1Array.map(person => person.name);

// Regular arrow function
const exercise1Result2 = exercise1Array.map((person) => {
  return person.name;
});

console.log("Exercise 1 - One-line:", exercise1Result1);
console.log("Exercise 1 - Regular:", exercise1Result2);

// --------------------------------------------

// EXERCISE 2 – Convert Numbers to Dollar Strings

// One-line arrow function
const exercise2Result1 = exercise2Array.map(n => `${n} dollars`);

// Regular arrow function
const exercise2Result2 = exercise2Array.map((n) => {
  return `${n} dollars`;
});

console.log("Exercise 2 - One-line:", exercise2Result1);
console.log("Exercise 2 - Regular:", exercise2Result2);

// --------------------------------------------

// EXERCISE 3 – Wrap Colors in HTML Tags

// One-line arrow function
const exercise3Result1 = exercise3Array.map(color => `<div>${color}</div>`);

// Regular arrow function
const exercise3Result2 = exercise3Array.map((color) => {
  return `<div>${color}</div>`;
});

console.log("Exercise 3 - One-line:", exercise3Result1);
console.log("Exercise 3 - Regular:", exercise3Result2);

// --------------------------------------------

// EXERCISE 4 – Square Number and Add 10

// One-line arrow function
const exercise4Result1 = exercise4Array.map(n => n * n + 10);

// Regular arrow function
const exercise4Result2 = exercise4Array.map((n) => {
  return n * n + 10;
});

console.log("Exercise 4 - One-line:", exercise4Result1);
console.log("Exercise 4 - Regular:", exercise4Result2);

// --------------------------------------------

// EXERCISE 5 – Reverse Each Fruit Name

// One-line arrow function
const exercise5Result1 = exercise5Arra

