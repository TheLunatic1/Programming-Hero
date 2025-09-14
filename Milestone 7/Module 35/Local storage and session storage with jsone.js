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