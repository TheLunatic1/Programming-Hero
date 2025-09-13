// Concept recap

// variable declaring with let and const
let age = 25;
const name = "John";


// if-else statement and comparison operators && ||
if (age >= 18 && age <= 65) {
    console.log(`${name} is an adult.`);
} else {
    console.log(`${name} is a minor.`);
}


// array declaration and manipulation
let fruits = ["apple", "banana", "cherry"];
fruits.push("date");
console.log(fruits);
console.log(fruits.length); // Length of the array
console.log(fruits[1]); // Accessing second element
fruits.push("date"); // Adding last element
console.log(fruits);

fruits.pop(); // Removing last element
console.log(fruits);

fruits.shift(); // Removing first element
console.log(fruits);

fruits.unshift("apricot"); // Adding first element
console.log(fruits);

console.log(fruits.slice(2,5)); // Slicing array from index 2 to 4 whick shows elements at index 2 to 4
console.log(fruits.splice(2,5)); // Splicing array from index 2 to 6 which removes elements at index 2 to 5

// for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(...arguments); // This will log the arguments object, which is not typically used in for loops
    const element = fruits[i];
    console.log(element);
} // This code iterates through the array and prints each fruit

// function declaration and invocation
function sum(a, b) {
    const result = a + b;
    console.log(`The sum of ${a} and ${b} is ${result}`);
    return result;
} // Function to calculate and print the sum of two numbers
sum(5, 10); // Invoking the function with arguments 5 and 10


// object declaration and property access
const person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 30
};


person.age = 31; // Modifying property example: changing age from 30 to 31
person.city = "New York"; // Adding new property example: adding city property

console.log(person.firstName); // Accessing property using dot notation example: "Jane"
console.log(person["lastName"]); // Accessing property using bracket notation example: "Doe"

console.log(Object.keys(person)); // Getting all keys of the object example: ["firstName", "lastName", "age", "city"]
console.log(Object.values(person)); // Getting all values of the object example: ["Jane", "Doe", 31, "New York"]


