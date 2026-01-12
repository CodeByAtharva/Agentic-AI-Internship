// Part 1 - Q1
console.log(11 % 3);              // 2

// Part 1 - Q2
console.log(1 + "JS");            // "1JS"

// Part 1 - Q3
console.log(1 * "JS");            // NaN

// Part 1 - Q4
console.log(5 + true);            // 6

// Part 1 - Q5
console.log(6 - true);            // 5

// Part 1 - Q6
console.log(7 - false);           // 7

// Part 1 - Q7
console.log(1 + 2 * 3 / 4);       // 2.5

// Part 1 - Q8
console.log(8 + false);           // 8

// Part 1 - Q9
console.log(true + true);         // 2

// Exponentiation
// Part 1 - Q10
console.log(7 ** 2);              // 49

// Part 1 - Q11
console.log(2 ** 3);              // 8

// String Operations
// Part 1 - Q12
console.log("hello" + " " + "world"); // "hello world"

// Part 1 - Q13
console.log("hello" * 10);        // NaN

// Type Conversion
// Part 1 - Q14
console.log(true + false);        // 1

// Part 1 - Q15
console.log(+true);               // 1

// Part 1 - Q16
console.log(+"21");               // 21

// Part 1 - Q17
console.log(+null);               // 0





let count = 46;

// Part 2 - Q1
console.log(count++); // 46

// Part 2 - Q2
console.log(++count); // 48

// Part 2 - Q3
console.log(count++); // 48

// Part 2 - Q4
console.log(++count); // 50

// Part 2 - Q5
console.log(count++ + 10); // 60

// Part 2 - Q6
console.log(++count + 5);  // 67

// Part 2 - Q7
console.log(count++);      // 62

// Part 2 - Q8
count += 10;
console.log(count);        // 73

// Part 2 - Q9
count *= 5;
console.log(count);        // 365




// Part 3 - Q1
console.log(3 + 4 * 5);          // 23

// Part 3 - Q2
console.log((25 + 28) + 105);    // 158

// Part 3 - Q3
console.log(4 * 3 ** 2);         // 36

// Comma Operator
// Part 3 - Q4
console.log(4, 400 + 10);        // 410

// Part 3 - Q5
console.log((4, 400) + 10);      // 410

// Mixed Type Operations
// Part 3 - Q6
console.log(3 + "10" * 2);       // 23

// Part 3 - Q7
console.log(3 + 10 * "2");       // 23

// Part 3 - Q8
console.log("3" + 10 * 2);       // "320"

// Part 3 - Q9
console.log(3 + 10 * 2);         // 23

// Parentheses Priority
// Part 3 - Q10
console.log(3 + (10 * 2));       // 23

// Part 3 - Q11
console.log((3 + 10) * 2);       // 26

// Exponentiation (Right-to-Left)
// Part 3 - Q12
console.log(2 ** 3 ** 2);        // 512

// Part 3 - Q13
console.log(2 ** (3 ** 2));      // 512

// Part 3 - Q14
console.log((2 ** 3) ** 2);      // 64

// Type Conversion with Operations
// Part 3 - Q15
console.log(+null + 10);         // 10

// Part 3 - Q16
console.log(+"21" + (10, 20));   // 41
