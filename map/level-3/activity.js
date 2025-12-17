// ============================================
// MAP FUNCTION - LEVEL 3
// ============================================

// ============================================
// EXERCISE SOLUTIONS
// ============================================

// EXERCISE 1 – Create Full Names

// One-line arrow function
const exercise1Result1 = exercise1Array.map(
  person => `${person.firstName} ${person.lastName}`
);

// Regular arrow function
const exercise1Result2 = exercise1Array.map((person) => {
  return `${person.firstName} ${person.lastName}`;
});

console.log("Exercise 1 - One-line:", exercise1Result1);
console.log("Exercise 1 - Regular:", exercise1Result2);

// --------------------------------------------

// EXERCISE 2 – Format Numbers as Strings

// One-line arrow function
const exercise2Result1 = exercise2Array.map(n => `Number: ${n}`);

// Regular arrow function
const exercise2Result2 = exercise2Array.map((n) => {
  return `Number: ${n}`;
});

console.log("Exercise 2 - One-line:", exercise2Result1);
console.log("Exercise 2 - Regular:", exercise2Result2);

// --------------------------------------------

// EXERCISE 3 – Convert Numbers to Percentages

// One-line arrow function
const exercise3Result1 = exercise3Array.map(n => `${n}%`);

// Regular arrow function
const exercise3Result2 = exercise3Array.map((n) => {
  return `${n}%`;
});

console.log("Exercise 3 - One-line:", exercise3Result1);
console.log("Exercise 3 - Regular:", exercise3Result2);

// --------------------------------------------

// EXERCISE 4 – Capitalize First Letter of Each Word

// One-line arrow function
const exercise4Result1 = exercise4Array.map(sentence =>
  sentence
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ")
);

// Regular arrow function
const exercise4Result2 = exercise4Array.map((sentence) => {
  return sentence
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
});

console.log("Exercise 4 - One-line:", exercise4Result1);
console.log("Exercise 4 - Regular:", exercise4Result2);

// --------------------------------------------

// EXERCISE 5 – Calculate Total Cost

// One-line arrow function
const exercise5Result1 = exercise5Array.map(
  item => item.price * item.quantity
);

// Regular arrow function
const exercise5Result2 = exercise5Array.map((item) => {
  return item.price * item.quantity;
});

console.log("Exercise 5 - One-line:", exercise5Result1);
console.log("Exercise 5 - Regular:", exercise5Result2);


