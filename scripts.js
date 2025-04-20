// If statement Practice
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const paymentResult = document.getElementById("paymentResult");
const checkboxResult = document.getElementById("checkboxResult");

document.getElementById("mySubmit").onclick = function() {
    if(visaBtn.checked) {
        checkboxResult.textContent = `You chose Visa.`
    }

    if(mastercardBtn.checked) {
        paymentResult.textContent = `You chose MasterCard.`
    }

    if(paypalBtn.checked) {
        paymentResult.textContent = `You chose PayPal.`
    }
}
