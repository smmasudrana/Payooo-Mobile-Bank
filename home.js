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

//reuseable function for toggle to hiding parent
function hideParentWithToggle(id){
    const forms = document.getElementsByClassName('form');
    for(const form of forms){
        form.style.display='none';
    }
    document.getElementById(id).style.display = 'block';
}

//-----------------------------------------------------------------------------------------------------------


//logout button functionality-----------------------------------------------------
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


//transfer money functionality
document.getElementById('sendNow-btn').addEventListener('click', function(event){
    event.preventDefault();
    const transferAccountNumber = getInputValue('transfer-acNumber');
    const transferAmount = getInputValueNumber('transfer-amount');
    const transferPin = getInputValueNumber('transfer-pin')

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    const availableBalanceAfterTransfer = availableBalance - transferAmount;
    document.getElementById('available-balance').innerText = availableBalanceAfterTransfer;

})

//get bonus functionality
document.getElementById('getBonus-btn').addEventListener('click', function(event){
    event.preventDefault();
    const validBonusCoupon = 'masud10';
    const bonusCoupon = getInputValue('bonus-coupon');
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    if(validBonusCoupon === bonusCoupon){
        const afterBonus = availableBalance + 500;
        document.getElementById('available-balance').innerText = afterBonus;
    }
    else{
        alert('please enter valid coupon code');
    }
})


//toggling feature hide parent-------------------------------------------------

document.getElementById('add-money-btn').addEventListener('click', function(){
    // const forms = document.getElementsByClassName('form');
    // for(const form of forms){
    //     form.style.display='none';
    // }
    // document.getElementById('add-money-parent').style.display = 'block';

    hideParentWithToggle('add-money-parent');

    const formBoxs = document.getElementsByClassName('form-box');
    for(const formBox of formBoxs){
        formBox.classList.remove('border-[#e6e6e6]')
        formBox.classList.add('border-[#e6e6e6]')
    }
    document.getElementById('add-money-btn').classList.remove('border-[#e6e6e6]')
    document.getElementById('add-money-btn').classList.add('border-[#0874f2]', 'bg-[#f2f8fe]');
    
})

document.getElementById('cashout-btn').addEventListener('click', function(){
    hideParentWithToggle('cashout-parent');

    const formBoxs = document.getElementsByClassName('form-box');
    for(const formBox of formBoxs){
        formBox.classList.remove('border-[#e6e6e6]')
        formBox.classList.add('border-[#e6e6e6]')
    }
    document.getElementById('cashout-btn').classList.remove('border-[#e6e6e6]')
    document.getElementById('cashout-btn').classList.add('border-[#0874f2]', 'bg-[#f2f8fe]')
})

document.getElementById('transfer-btn').addEventListener('click', function(){
    hideParentWithToggle('transfer-parent');

    const formBoxs = document.getElementsByClassName('form-box');
    for(const formBox of formBoxs){
        formBox.classList.remove('border-[#e6e6e6]')
        formBox.classList.add('border-[#e6e6e6]')
    }
    document.getElementById('transfer-btn').classList.remove('border-[#e6e6e6]')
    document.getElementById('transfer-btn').classList.add('border-[#0874f2]', 'bg-[#f2f8fe]');
})

document.getElementById('btn-for-bonus').addEventListener('click', function(){
    hideParentWithToggle('getBonus-parent');

    const formBoxs = document.getElementsByClassName('form-box');
    for(const formBox of formBoxs){
        formBox.classList.remove('border-[#e6e6e6]')
        formBox.classList.add('border-[#e6e6e6]')
    }
    document.getElementById('btn-for-bonus').classList.remove('border-[#e6e6e6]')
    document.getElementById('btn-for-bonus').classList.add('border-[#0874f2]', 'bg-[#f2f8fe]');
})


//toggle box active bg and border color apply
document.getElementsByClassName