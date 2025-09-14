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

// Arrow function
const multiply = (x, y) => x * y; // Arrow function to multiply two numbers (can use {} for multiple statements but has to use return keyword)
console.log(multiply(4, 6)); // Invoking the arrow function with arguments 4 and 6
    // arguments object is not available in arrow functions

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


// template literals ""/''  ``
const greeting = `Hello, my name is ${person.firstName} ${person.lastName} and I am ${person.age} years old.`; // Using template literals to create a greeting message
console.log(greeting); // Printing the greeting message

// ... spread operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5]; // Using spread operator to create a new array by adding elements to an existing array
console.log(newNumbers); // Printing the new array

// array methods: map, filter, find, forEach
const products = [
    { id: 1, name: "Laptop", price: 1000, colour: "Silver" },
    { id: 2, name: "Phone", price: 500, colour: "Black" },
    { id: 3, name: "Tablet", price: 300, colour: "White" },
    { id: 4, name: "Monitor", price: 200, colour: "Black" }
];

// Using map to create a new array of product names. example: ["Laptop", "Phone", "Tablet", "Monitor"]
const productNames = products.map(product => product.name);
console.log(productNames);

// Using filter to create a new array of products with price > 300. example: [{ id: 1, name: "Laptop", price: 1000, colour: "Silver" }, { id: 2, name: "Phone", price: 500, colour: "Black" }]
const filteredProducts = products.filter(product => product.price > 300);
console.log(filteredProducts);

// Using find to get the first product with colour "Black". example: { id: 2, name: "Phone", price: 500, colour: "Black" }
const blackProduct = products.find(product => product.colour === "Black");
console.log(blackProduct);

// Using forEach to log each product's name. example: "Laptop", "Phone", "Tablet", "Monitor". forEach does not return a new array. it simply executes a provided function once for each array element.
products.forEach(product => console.log(product.name));

//destructuring (A JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.)
// the Object is : { firstName: "Jane", lastName: "Doe", age: 31, city: "New York" } at line 49
// the Array is : ["apricot", "banana", "cherry", "date"] at line 26
const { firstName, lastName, age: personAge } = person; // Destructuring object to extract properties into variables age is renamed to personAge because age has already been used as a variable above.
console.log(firstName, lastName, personAge); // Printing the destructured variables. example: "Jane", "Doe", 31

const [firstFruit, secondFruit] = fruits; // Destructuring array to extract elements into variables
console.log(firstFruit, secondFruit); // Printing the destructured variables. example: "apricot", "banana"

// json (JavaScript Object Notation)
const jsonObj={ "name": "Alice", "age": 28, "city": "Los Angeles" }; // A sample JSON object
const jsonString = JSON.stringify(jsonObj); // Converting JavaScript object to JSON string
const jsonObject = JSON.parse(jsonString); // Converting JSON string back to JavaScript object
console.log(jsonString); // Printing the JSON string
console.log(jsonObject); // Printing the JavaScript object

// fetch (to make HTTP requests)
// Note: fetch is not available in Node.js by default. It is available in browsers and can be used in Node.js with additional packages like node-fetch or axios.
// The following code is an example of how to use fetch in a browser environment.
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
fetch("https://api.example.com/data") // Fetching data from a sample API endpoint by making a GET request
    .then(response => response.json()) // Parsing the response as JSON format
    .then(data => {
        console.log(data); // Logging the fetched data in a variable named data
    })
    .catch(error => console.error("Error fetching data:", error)); // Handling any errors that might occur during the fetch operation


// keys, values, entries, array add or remove
const sampleObject = {  
                        a: 1, 
                        b: 2, 
                        c: 3 
                     };
const keys = Object.keys(sampleObject); // Getting keys of the object
const values = Object.values(sampleObject); // Getting values of the object
const entries = Object.entries(sampleObject); // Getting entries of the object
console.log(keys, values, entries); // Printing keys, values, and entries of the object


const sampleArrayOfObjects = [
    { id: 1, name: "Alice", age: 28 },
    { id: 2, name: "Bob", age: 34 },
    { id: 3, name: "Charlie", age: 22 }
];
const remaining=sampleArrayOfObjects.filter(obj => obj.id !== 2); // Removing object with id 2 from the array
const newArray2=[...remaining, ...sampleArrayOfObjects]; // Adding the removed object back to the array
//How it works: First, we filter out the object with id 2 and store the remaining objects in the 'remaining' array. Then, we create a new array 'newArray2' by spreading the 'remaining' array and the original 'sampleArrayOfObjects' array, effectively adding the removed object back to the array.



// truthy, falsy Ternary operator, shortcut and or
// all falsy values: false, 0, -0, 0n, "", null, undefined, NaN
// all other values are truthy values: true, {}, [], 42, "0", "false", new Date(), -42, 3.14, -3.14, Infinity, -Infinity, function() {}, /abc/
//How to checlk truthy and falsy values
const testtf = ""; // Change this value to test different truthy and falsy values
if (testtf) {
    console.log(`${testtf} is truthy`);
} else {
    console.log(`${testtf} is falsy`);
}


testtf ? console.log("Truthy") : console.log("Falsy"); // Ternary operator example

const shortcut = testtf || "Default Value"; // Shortcut OR example
console.log(shortcut); // Printing the result of shortcut OR

const shortcutAnd = testtf && "Another Value"; // Shortcut AND example
console.log(shortcutAnd); // Printing the result of shortcut AND (will print undefined if testtf is falsy)
// How it works: In the shortcut OR example, if 'testtf' is falsy, it will return "Default Value". In the shortcut AND example, if 'testtf' is falsy, it will return the falsy value (which is undefined in this case).

//another example by active status
const isActive = false; 
const showUser = () => console.log("User is active");
const hideUser = () => console.log("User is inactive");

isActive ? showUser() : hideUser(); // Ternary operator example based on isActive status
isActive && showUser(); // Shortcut AND example based on isActive status (will not call showUser if isActive is false)
!isActive && hideUser(); // Shortcut AND example with negation based on isActive status (will call hideUser if isActive is false)
// How it works: In the ternary operator example, if 'isActive' is true, it will call 'showUser', otherwise it will call 'hideUser'. In the shortcut AND example, if 'isActive' is true, it will call 'showUser'. In the negation example, if 'isActive' is false, it will call 'hideUser'.


// type conversion
const num = "123"; // A string representing a number
const convertedNum = Number(num); // Converting string to number
console.log(convertedNum, typeof convertedNum); // Printing the converted number and its type
const str = 456; // A number
const convertedStr = String(str); // Converting number to string
console.log(convertedStr, typeof convertedStr); // Printing the converted string and its type

// How it works: The Number() function converts a string to a number, and the String() function converts a number to a string. The typeof operator is used to check the type of the converted values.









// EXTRA CONCEPTS



// optional chaining (?.)
const user = {
    profile: {
        name: "John Doe",
        age: 30,
        address: {
            city: "New York",
            zip: "10001"
        }
    }
};  
console.log(user.profile?.name); // Accessing name property safely using optional chaining
console.log(user.profile?.address?.city); // Accessing city property safely using optional chaining
console.log(user.profile?.phone?.number); // Trying to access a non-existent property safely using optional chaining (will return undefined instead of throwing an error)
// How it works: The optional chaining operator (?.) allows you to safely access nested properties of an object without causing an error if a property is undefined or null. If any part of the chain is undefined or null, the entire expression will return undefined instead of throwing an error.

// nullish coalescing (??)
const value = null;
const defaultValue = "Default Value";
const result = value ?? defaultValue; // Using nullish coalescing to provide a default value
console.log(result); // Printing the result (will print "Default Value" since value is null)
// How it works: The nullish coalescing operator (??) returns the right-hand operand when the left-hand operand is null or undefined. In this case, since 'value' is null, 'result' will be assigned 'defaultValue'.

// BigInt
const bigIntValue = BigInt(123456789012345678901234567890);
console.log(bigIntValue); // Printing the BigInt value
console.log(typeof bigIntValue); // Printing the type of BigInt value
// How it works: BigInt is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent with the Number primitive. You can create a BigInt by appending 'n' to the end of an integer or by using the BigInt() function.

// global and local scope
let globalVar = "I am a global variable"; // A global variable
function testScope() {
    let localVar = "I am a local variable"; // A local variable
    console.log(globalVar); // Accessing global variable
    console.log(localVar); // Accessing local variable
}
testScope();
console.log(globalVar); // Accessing global variable outside the function
// console.log(localVar); // Trying to access local variable outside the function (will throw an error)
// How it works: Variables declared outside of any function have global scope and can be accessed from anywhere in the code. Variables declared within a function have local scope and can only be accessed within that function. Attempting to access a local variable outside its function will result in a ReferenceError.   
// Note: In Node.js, each file has its own module scope, so variables declared with var, let, or const at the top level of a file are not added to the global object. To create a truly global variable in Node.js, you can attach it to the global object (e.g., global.globalVar = "I am a global variable";).
// How it works: Variables declared outside of any function have global scope and can be accessed from anywhere in the code. Variables declared within a function have local scope and can only be accessed within that function. Attempting to access a local variable outside its function will result in a ReferenceError.   
// Note: In Node.js, each file has its own module scope, so variables declared with var, let, or const at the top level of a file are not added to the global object. To create a truly global variable in Node.js, you can attach it to the global object (e.g., global.globalVar = "I am a global variable";).
// classes and constructor
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
const person1 = new Person("Alice", "Smith", 28); // Creating an instance of the Person class
console.log(person1); // Printing the instance of the Person class
// How it works: A class is a blueprint for creating objects. The constructor method is a special method for creating and initializing an object created with a class. The 'new' keyword is used to create an instance of the class, which calls the constructor method to set up the object's properties.

// inheritance(What is it? When a class (child class) can inherit properties and methods from another class (parent class). It allows for code reusability and the creation of hierarchical relationships between classes.)
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Calling the parent class constructor
        this.breed = breed;
    }
}
const dog1 = new Dog("Buddy", "Golden Retriever"); // Creating an instance of the Dog class
console.log(dog1); // Printing the instance of the Dog class
// How it works: The 'extends' keyword is used to create a class that is a child of another class. The child class inherits properties and methods from the parent class. The 'super' keyword is used to call the constructor of the parent class, allowing the child class to access and initialize inherited properties.  This promotes code reusability and establishes a hierarchical relationship between classes.

// modules (In JavaScript, a module is a file that contains code that can be imported and used in other files. Modules help to organize code, promote reusability, and manage dependencies.)        
// Exporting a function from a module (mathUtils.js)
// export function add(a, b) {
//     return a + b;
// }    

// End of concept recap
