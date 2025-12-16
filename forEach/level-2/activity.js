// ============================================
// FOREACH FUNCTION - LEVEL 2
// ============================================

// ============================================
// EXERCISES
// ============================================

// ============================================
// EXERCISE SOLUTIONS
// ============================================

// EXERCISE 1 – Print Name and Age

// One-line arrow function
exercise1Array.forEach(person =>
  console.log(`${person.name} is ${person.age} years old`)
);

// Regular arrow function
exercise1Array.forEach((person) => {
  console.log(`${person.name} is ${person.age} years old`);
});

// --------------------------------------------

// EXERCISE 2 – Print Only Even Numbers

// One-line arrow function
exercise2Array.forEach(n => {
  if (n % 2 === 0) console.log(n);
});

// Regular arrow function
exercise2Array.forEach((n) => {
  if (n % 2 === 0) {
    console.log(n);
  }
});

// --------------------------------------------

// EXERCISE 3 – Print Fruit with Index

// One-line arrow function
exercise3Array.forEach((fruit, index) =>
  console.log(`Index ${index}: ${fruit}`)
);

// Regular arrow function
exercise3Array.forEach((fruit, index) => {
  console.log(`Index ${index}: ${fruit}`);
});

// --------------------------------------------

// EXERCISE 4 – Build String with Arrows

// One-line arrow function
exercise4Array.forEach((n, index) =>
  exercise4Result += index === 0 ? n : ` -> ${n}`
);

// Regular arrow function (reset first)
exercise4Result = "";
exercise4Array.forEach((n, index) => {
  exercise4Result += index === 0 ? n : ` -> ${n}`;
});

console.log("Exercise 4 - Result:", exercise4Result);

// --------------------------------------------

// EXERCISE 5 – Count Numbers Greater Than 20

// One-line arrow function
exercise5Array.forEach(n => {
  if (n > 20) exercise5Count++;
});

// Regular arrow function (reset first attaching)
exercise5Count = 0;
exercise5Array.forEach((n) => {
  if (n > 20) {
    exercise5Count++;
  }
});

console.log("Exercise 5 - Count:", exercise5Count);
