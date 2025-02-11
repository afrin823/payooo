document.getElementById("show-cash-out").addEventListener("click", function(e){
    e.preventDefault();

    const cashOut = document.getElementById("cash-out-form").classList.remove("hidden")
    const AddMoney = document.getElementById("add-money-form").classList.add("hidden")
})

document.getElementById("show-add-money").addEventListener("click", function(e){
    e.preventDefault();

    const AddMoney = document.getElementById("add-money-form").classList.remove("hidden")
    const cashOut = document.getElementById("cash-out-form").classList.add("hidden")
})