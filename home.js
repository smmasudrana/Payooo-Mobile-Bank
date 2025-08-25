//reuseable function for input value number.
function getInputValueNumber(id){
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    const inputFieldValueNumber = parseInt(inputFieldValue);
    return inputFieldValueNumber;
}
//reuseable input value.
function getInputValue(id){
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    return inputFieldValue;
}

// reuseable function to get innertext
function getInnerText(id){
const element = document-getElementById("available-balance")
const elementValue = element. innerText
const elementValueNumber = parseInt(elementValue)
return elementValueNumber
}
//reuseable function to set innerText
function setInnerText(value){
const availableBalanceElement = document-getElementById("available-balance")
availableBalanceElement.innerText = value
}


//logout button functionality
document.getElementById('log-out-btn').addEventListener('click', function(){
    window.location.href="./index.html";
})

//add money functionality ---------------------------------------------
const validPin = 1234;
document.getElementById('addMoneyBtn')
.addEventListener('click', function(event){
    event.preventDefault();

    const bank =document.getElementById('bank').value ;
    const accountNumber = document.getElementById('account-number').value;
    // const addAmount = parseInt(document.getElementById('add-amount').value);
    const addAmount = getInputValueNumber('add-amount');
    // const addPin = parseInt(document.getElementById('add-pin').value);
    const addPin = getInputValueNumber('add-pin');

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    if(accountNumber.length < 11){
        alert('Please enter you valid account number');
        return;
    }
    if(addPin !== validPin){
        alert('Please enter your correct pin');
        return;
    }

    const totalNewAvailableBalance = addAmount + availableBalance;
    document.getElementById('available-balance').innerText = totalNewAvailableBalance;
})

//cashout money functionality ------------------------------------------
document.getElementById('withdraw-btn').addEventListener('click', function(event){
    event.preventDefault();
    const agentNumber = document.getElementById('agent-number').value;
    const cashoutAmount = parseInt(document.getElementById('cashout-amount').value);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const cashPin = parseInt(document.getElementById('cashout-pin').value);

    if(agentNumber.length < 11){
        alert('Please enter you valid account number');
        return;
    }
    if(cashPin !== validPin){
        alert('Please enter your correct pin');
        return;
    }

    const afterCashoutAvailableBalance = availableBalance - cashoutAmount;
    document.getElementById('available-balance').innerText = afterCashoutAvailableBalance;

})


//toggling feature -------------------------------------------------

document.getElementById('add-money-btn').addEventListener('click', function(){
    document.getElementById('cashout-parent').style.display = 'none';

    document.getElementById('add-money-parent').style.display = 'block';
})


document.getElementById('cashout-btn').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = 'none';

    document.getElementById('cashout-parent').style.display = 'block';
})