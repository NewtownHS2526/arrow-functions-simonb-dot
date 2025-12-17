// ============================================
// REDUCE FUNCTION - LEVEL 3
// ============================================

// ============================================
// EXERCISES
// ============================================

/*
EXERCISE 1 – Total value of all products
*/
// One-line arrow function
const exercise1Result1 = exercise1Array.reduce((total, item) => total + item.price * item.quantity, 0);

// Regular arrow function
const exercise1Result2 = exercise1Array.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);

console.log("Exercise 1 - One-line:", exercise1Result1);
console.log("Exercise 1 - Regular:", exercise1Result2);
// Expected: 2350

/*
EXERCISE 2 – Object with fruit lengths
*/
// One-line arrow function
const exercise2Result1 = exercise2Array.reduce((obj, fruit) => ({ ...obj, [fruit]: fruit.length }), {});

// Regular arrow function
const exercise2Result2 = exercise2Array.reduce((obj, fruit) => {
  obj[fruit] = fruit.length;
  return obj;
}, {});

console.log("Exercise 2 - One-line:", exercise2Result1);
console.log("Exercise 2 - Regular:", exercise2Result2);
// Expected: { apple: 5, banana: 6, cherry: 6, date: 4 }

/*
EXERCISE 3 – Average of numbers
*/
// One-line arrow function
const exercise3Result1 = exercise3Array.reduce((sum, n) => sum + n, 0) / exercise3
