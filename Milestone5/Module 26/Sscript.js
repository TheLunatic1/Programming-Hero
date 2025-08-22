console.log("script loaded");
//login
document.getElementById("login-submit").addEventListener("click", function () {
    const mobileNumber = 12345678910;
    const pin = 1234;

    console.log("login button clicked");

    const mobileNumberValue = document.getElementById("mobile-number").value;
    const mobileNumberValueConverted = parseInt(mobileNumberValue);


    const pinValue = document.getElementById("4-digit-pin").value;

    const pinValueConverted = parseInt(pinValue);

    // console.log("Mobile Number:", mobileNumberValueConverted);
    // console.log("4 Digit Pin:", pinValueConverted);
    if (mobileNumber === mobileNumberValueConverted && pin === pinValueConverted) {
        console.log("Login Successful");
        window.location.href = "home.html";
    } else {
        console.log("Login Failed");
        alert("Invalid Mobile Number or PIN. Please try again.");
    }
})