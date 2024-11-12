// VARIABLES :
// Variables are containers for storing data values. In javascript we can use var, let, const keywords to declare variables. Syntax for declaring variables: ```var variableName = value;```

// Example 1:
console.log("\n\nUnderstanding variables in JavaScript");
console.log("\n1. Understanding var keyword: ");

console.log("\nExample 1: ");
var x = 5;

console.log("\nValue of x =", x);

// 1. ```var``` keyword is used to declare a variable.
// 2. ```x``` is the variable name.

// Understanding ```var```` keyword:
// Variables decalred using ``var`` keyword are function scoped and not block scoped. Meaning, the variable is available throughout the function in which it is declared.

// Example 2:
function test_function_1() {
  var y = 10;
  console.log("Inside function: ", y);
}

test_function_1();

// console.log("Outside function: ", y); // ReferenceError: y is not defined, bcoz y is not available outside the function.
