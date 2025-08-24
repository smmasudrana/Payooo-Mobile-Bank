//login button functionality.
document.getElementById('loginButton')
.addEventListener('click', function(event){
    event.preventDefault()

    const mobileNumber = 01723658813;
    const pinNumber = 1234; 

    const mobileNumberValue = document.getElementById('mobile-number').value;
    const mobileNumberValueConverted = parseInt(mobileNumberValue);

    const pinNumberValue = document.getElementById('pin-number').value;
    const pinNumberValueConverted = parseInt(pinNumberValue);

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        window.location.href="./home.html"
    }
    else{
        alert('invalid credentials')
    }
})