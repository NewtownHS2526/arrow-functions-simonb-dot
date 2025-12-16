// ============================================
// FILTER FUNCTION - LEVEL 3
// ============================================

// ============================================
// EXERCISES
// ============================================

// ============================================
// EXERCISE SOLUTIONS
// ============================================

// EXERCISE 1 – Products In Stock
const exercise1Result1 = exercise1Array.filter(item => item.inStock === true);

const exercise1Result2 = exercise1Array.filter((item) => {
  return item.inStock === true;
});

console.log("Exercise 1 - One-line:", exercise1Result1);
console.log("Exercise 1 - Regular:", exercise1Result2);

// --------------------------------------------

// EXERCISE 2 – People Living in New York
const exercise2Result1 = exercise2Array.filter(person => person.city === "New York");

const exercise2Result2 = exercise2Array.filter((person) => {
  return person.city === "New York";
});

console.log("Exercise 2 - One-line:", exercise2Result1);
console.log("Exercise 2 - Regular:", exercise2Result2);

// --------------------------------------------

// EXERCISE 3 – Numbers That Are Multiples of 25
const exercise3Result1 = exercise3Array.filter(n => n % 25 === 0);

const exercise3Result2 = exercise3Array.filter((n) => {
  return n % 25 === 0;
});

console.log("Exercise 3 - One-line:", exercise3Result1);
console.log("Exercise 3 - Regular:", exercise3Result2);

// --------------------------------------------

// EXERCISE 4 – Books with More Than 200 Pages
const exercise4Result1 = exercise4Array.filter(book => book.pages > 200);

const exercise4Result2 = exercise4Array.filter((book) => {
  return book.pages > 200;
});

console.log("Exercise 4 - One-line:", exercise4Result1);
console.log("Exercise 4 - Regular:", exercise4Result2);

// --------------------------------------------

// EXERCISE 5 – Words with Odd Number of Characters
const exercise5Result1 = exercise5Array.filter(word => word.length % 2 !== 0);

const exercise5Result2 = exercise5Array.filter((word) => {
  return word.length % 2 !== 0;
});

console.log("Exercise 5 - One-l
