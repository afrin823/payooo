document.getElementById("cash-out-btn").addEventListener("click", function(e){
    e.preventDefault();
    const amountInput = document.getElementById("cash-out-amount").value;
    const pinInput = document.getElementById("cash-out-pin").value;
    const amount = parseFloat(amountInput);
   

    if(pinInput === '12490'){
        const currentAmount = document.getElementById("current-amount").innerText;

        const currentBalance = parseFloat(currentAmount);
        const balance = currentBalance - amount;
        const newBlance = document.getElementById("current-amount").innerText = balance;

    }else{
        alert("wrong pin number")
    }
})