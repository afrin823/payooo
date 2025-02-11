document.getElementById("add-money-btn")
.addEventListener("click", function(event){
    event.preventDefault();
    const Amount = document.getElementById("amount").value;
    const pinNumber = document.getElementById("pin-number").value;
    const currentAmount = document.getElementById("current-amount").innerText;
    console.log(currentAmount);

    if(pinNumber === "12490"){
        const amountInput = parseFloat(Amount);
        const CurrnetAmount = parseFloat(currentAmount);
        const updateAmount = amountInput + CurrnetAmount;
        const TotalAmount = document.getElementById("current-amount").innerText = updateAmount;
        console.log(updateAmount);
    }else{
        console.log("wrong pin number");
    }
})