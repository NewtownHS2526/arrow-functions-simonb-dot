// ============================================
// FOREACH FUNCTION - LEVEL 3
// ============================================

// ============================================
// EXERCISES
// ============================================

// ============================================
// EXERCISE SOLUTIONS
// ============================================

// EXERCISE 1 – Product Total Value

// One-line arrow function
exercise1Array.forEach(item =>
  console.log(`${item.product}: $${item.price * item.quantity} total`)
);

// Regular arrow function
exercise1Array.forEach((item) => {
  console.log(`${item.product}: $${item.price * item.quantity} total`);
});

// --------------------------------------------

// EXERCISE 2 – Words Longer Than 5 Characters

// One-line arrow function
exercise2Array.forEach(word => {
  if (word.length > 5) console.log(word);
});

// Regular arrow function
exercise2Array.forEach((word) => {
  if (word.length > 5) {
    console.log(word);
  }
});

// --------------------------------------------

// EXERCISE 3 – Product of All Numbers

// One-line arrow function
exercise3Array.forEach(n => exercise3Product *= n);

// Regular arrow function (reset first)
exercise3Product = 1;
exercise3Array.forEach((n) => {
  exercise3Product *= n;
});

console.log("Exercise 3 - Product:", exercise3Product);

// --------------------------------------------

// EXERCISE 4 – Print Reversed Words

// One-line arrow function
exercise4Array.forEach(word =>
  console.log(word.split("").reverse().join(""))
);

// Regular arrow function
exercise4Array.forEach((word) => {
  console.log(word.split("").reverse().join(""));
});

// --------------------------------------------

// EXERCISE 5 – Find Maximum Number

// One-line arrow function
exercise5Array.forEach(n => {
  if (n > exercise5Max) exercise5Max = n;
});

// Regular arrow function (reset first)
exercise5Max = exercise5Array[0];
exercise5Array.forEach((n) => {
  if (n > exercise5Max) {
    exercise5Max = n;
  }
});

console.log("Exercise 5 - Maximum:", exercise5Max);
