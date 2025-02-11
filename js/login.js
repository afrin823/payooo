document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('login');

    // get the phone number 
    const phoneNumber = document.getElementById('phn-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);

    if(phoneNumber === '5' && pinNumber === '12490'){
        console.log('are you logged in');
        window.location.href = '../index.html';
    }else{
        console.log('wrong pin number or pin number');
    }
})