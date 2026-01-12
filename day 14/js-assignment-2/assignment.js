
// Q1: Even or Odd
let num = Number(prompt("Enter a number:"));

if (num % 2 === 0) {
  alert(num + " is an Even number");
} else {
  alert(num + " is an Odd number");
}


// Q2: Maximum of Two Numbers
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

if (num1 > num2) {
  alert("Maximum number is: " + num1);
} else if (num2 > num1) {
  alert("Maximum number is: " + num2);
} else {
  alert("Both numbers are equal");
}


// Q3: House Name Check
let house = prompt("Enter house name:").toLowerCase();

if (house === "stark") {
  alert("Winter is coming");
} else if (house === "lannister") {
  alert("A Lannister always pays his debt");
} else {
  alert("All men must die");
}


// Q4: Salary After Tax
let salary = Number(prompt("Enter your salary:"));
let tax = 0;

if (salary <= 20000) {
  tax = salary * 0.10;
} else if (salary <= 40000) {
  tax = salary * 0.20;
} else {
  tax = salary * 0.30;
}

let inHandSalary = salary - tax;
alert("In-hand salary after tax is: " + inHandSalary);


// Q5: First 10 Fibonacci Numbers
let a = 0, b = 1;
let result = "Fibonacci Series: ";

for (let i = 1; i <= 10; i++) {
  result += a + " ";
  let next = a + b;
  a = b;
  b = next;
}

alert(result);
