document.getElementById("add-money-btn")
.addEventListener("click", function(event){
    event.preventDefault();
    const Amount = document.getElementById("amount").value;
    const pinNumber = document.getElementById("pin-number").value;
    console.log(Amount, pinNumber);
})