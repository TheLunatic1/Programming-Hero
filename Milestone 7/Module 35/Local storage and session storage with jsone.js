// Function to handle 
const submitName = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    // console.log(`my name is ${name}`);
    // localStorage.setItem("name", name);
    // localStorage.setItem("email", email);

    const user = { name, email };
    // console.log(user);
    localStorage.setItem("user", JSON.stringify(user)); // have to convert object to string

};

const storedItem = localStorage.getItem("user");
// console.log(storedItem);
const user = JSON.parse(storedItem); // convert string to object
// console.log(user);

// clear local storage
const clearStorage = () => {
    localStorage.clear();
}



//Bracket Notation (Not fully understood)
// what is bracket notation ? : Bracket notation is a way to access properties of an object using square brackets [] instead of dot notation. It allows you to use variables or strings as property names, making it more flexible for dynamic property access.
// Example:
const user2 = {
    name: "John",
    age: 30,
    email: "john@example.com",
    friends: ["Jane", "Doe"],
    salary: { monthly: 5000, yearly: 60000 },
    10: "ten"
};

const property = "email";
// Accessing property using bracket notation
console.log(user2["name"]); // Output: John
console.log(user2[property]); // Output: john@example.com
//Why use bracket notation?
// Dynamic property access: You can use variables to access properties, which is useful when the property name is not known in advance.
// Special characters: If a property name contains spaces or special characters, bracket notation allows you to access it without issues.
// Computed property names: You can compute property names at runtime using expressions inside the brackets.
console.log(user2[10]); // Output: ten
// console.log(user2.property); // Output: undefined (dot notation doesn't work with variables)