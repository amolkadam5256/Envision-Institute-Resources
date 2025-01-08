
// 1. Using multiple console functions

// Creating a table for demonstration
const data = [
  { Name: "John", Age: 25, Profession: "Engineer" },
  { Name: "Alice", Age: 30, Profession: "Designer" },
  { Name: "Mark", Age: 28, Profession: "Developer" }
];

console.log("This is a log message."); // General log message
console.info("This is an info console  message ")
console.error("This is an error message."); // Error message
console.warn("This is a warning message."); // Warning message
console.table(data);

// 2. Declare a variable storing your name and print it in console
let myName = "Your Name Here";
// let myName = 43; is not working 

console.log("My Name is:", myName);

// 3. Demonstrating the difference between let, var, and const
// Example using 'let'
let age = 25;
age = 26; // 'let' allows reassignment
console.log("Age using let:", age);

// Example using 'var'
var city = "Pune";
city = "Mumbai"; // 'var' also allows reassignment
console.log("City using var:", city);

// Example using 'const'
const country = "India";

console.log("Country using const:", country);

if (true) {
  var x = 10; // 'var' is function-scoped, so it leaks out of the block
  let y = 20; // 'let' is block-scoped
  const z = 30; // 'const' is also block-scoped
}
console.log("Value of x (var):", x); // Accessible
