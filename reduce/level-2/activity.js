// ============================================
// REDUCE FUNCTION - LEVEL 2
// ============================================

// ============================================
// EXERCISES
// ============================================

/*
EXERCISE 1 – Sum of even numbers
*/
// One-line arrow function
const exercise1Result1 = exercise1Array.reduce((sum, n) => n % 2 === 0 ? sum + n : sum, 0);

// Regular arrow function
const exercise1Result2 = exercise1Array.reduce((sum, n) => {
  if (n % 2 === 0) {
    return sum + n;
  }
  return sum;
}, 0);

console.log("Exercise 1 - One-line:", exercise1Result1);
console.log("Exercise 1 - Regular:", exercise1Result2);
// Expected: 30

/*
EXERCISE 2 – Total age of all people
*/
// One-line arrow function
const exercise2Result1 = exercise2Array.reduce((total, person) => total + person.age, 0);

// Regular arrow function
const exercise2Result2 = exercise2Array.reduce((total, person) => {
  return total + person.age;
}, 0);

console.log("Exercise 2 - One-line:", exercise2Result1);
console.log("Exercise 2 - Regular:", exercise2Result2);
// Expected: 90

/*
EXERCISE 3 – Uppercase words joined with " - "
*/
// One-line arrow function
const exercise3Result1 = exercise3Array.reduce((str, word, idx) => str + (idx > 0 ? " - " : "") + word.toUpperCase(), "");

// Regular arrow function
const exercise3Result2 = exercise3Array.reduce((str, word, idx) => {
  if (idx > 0) {
    return str + " - " + word.toUpperCase();
  } else {
    return word.toUpperCase();
  }
}, "");

console.log("Exercise 3 - One-line:", exercise3Result1);
console.log("Exercise 3 - Regular:", exercise3Result2);
// Expected: "HELLO - WORLD - JAVASCRIPT"

/*
EXERCISE 4 – Find minimum number
*/
// One-line arrow function
const exercise4Result1 = exercise4Array.reduce((min, n) => n < min ? n : min);

// Regular arrow function
const exercise4Result2 = exercise4Array.reduce((min, n) => {
  if (n < min) {
    return n;
  }
  return min;
});

console.log("Exercise 4 - One-line:", exercise4Result1);
console.log("Exercise 4 - Regular:", exercise4Result2);
// Expected: 8

/*
EXERCISE 5 – Count numbers greater than 2
*/
// One-line arrow function
const exercise5Result1 = exercise5Array.reduce((count, n) => n > 2 ? count + 1 : count, 0);

// Regular arrow function
const exercise5Result2 = exercise5Array.reduce((count, n) => {
  if (n > 2) {
    return count + 1;
  }
  return count;
}, 0);

console.log("Exercise 5 - One-line:", exercise5Result1);
console.log("Exercise 5 - Regular:", exercise5Result2);
