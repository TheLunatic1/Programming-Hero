const validPin = 1234;

//function to get input value as nember
function getInputValue(id) {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    const inputfieldValueNumber = parseInt(inputValue);

    console.log(inputfieldValueNumber);
    return inputfieldValueNumber;
}

//function to get input value
function getInputValueString(id) {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    console.log(inputValue);
    return inputValue;
}


//function to get inner text
function getInnerText(id) {
    const element = document.getElementById(id);
    const innerText = element.innerText;
    console.log(innerText);
    return innerText;
}




//function to set inner text
function setInnerText(value) {
    const element = document.getElementById("available-balance");
    element.innerText = value;
}


// function to toggle
function handleToggle(formId) {
    const forms = document.getElementsByClassName("form12");
    for(const form of forms) {
        form.style.display = "none";
    }
    document.getElementById(formId).style.display = "block";
}

//btn style toggle
function handleBtnToggle(btnId){
    const formBtn = document.getElementsByClassName("form11");
    for(const btn of formBtn) {
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]");
        btn.classList.add("border-gray-300");
    }
    document.getElementById(btnId).classList.remove("border-gray-300");
    document.getElementById(btnId).classList.add("border-[#0874f2]","bg-[#0874f20d]");

}

document.getElementById("add-money-btn").addEventListener("click", function(e) {
    e.preventDefault();

    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = getInputValue("add-amount");
    const pin = getInputValue("add-pin");
    const availableBalance = parseInt(document.getElementById("available-balance").innerText);

    console.log(amount, availableBalance);

    if (accountNumber.length < 11) {
        alert("please provide valid account number");
        return;
    }

    if (pin !== validPin) {
        alert("Please provide valid pin number");
        return;
    }

    const totalNewAvailableBalance = amount + availableBalance;

    document.getElementById("available-balance").innerText = totalNewAvailableBalance;
});


// cashout money feature
document.getElementById("withdraw-btn").addEventListener("click", function(e) {
    e.preventDefault();
    const amount = getInputValue("withdraw-amount");
    const availableBalance = parseInt(document.getElementById("available-balance").innerText);
    const totalNewAvailableBalance = availableBalance - amount;
    console.log(totalNewAvailableBalance);
    document.getElementById("available-balance").innerText = totalNewAvailableBalance;
});


// toggling feature

document.getElementById("add-btn").addEventListener("click", function() {
    handleToggle("add-money-parent");
    handleBtnToggle("add-btn");
});

document.getElementById("cashout-btn").addEventListener("click", function() {
    handleToggle("cash-out-parent");
    handleBtnToggle("cashout-btn");
});

document.getElementById("transfer-btn").addEventListener("click", function() {
    handleToggle("transfer-money-parent");
    handleBtnToggle("transfer-btn");
});

document.getElementById("transaction-btn").addEventListener("click", function() {
    handleToggle("transaction-history-parent");
    handleBtnToggle("transaction-btn");
});