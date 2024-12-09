const checkbox = document.querySelector('#checkbox')
const visa = document.querySelector('#visa')
const masterCard = document.querySelector('#masterCard')
const paypal = document.querySelector('#paypal')
const submit = document.querySelector('#submit')
const subResult = document.querySelector('#subResult')
const payResult = document.querySelector('#payResult')

submit.onclick = function (){
    if (checkbox.checked) subResult.textContent =  `You are SUBSCRIBED!`
    else subResult.textContent =  `You are NOT SUBSCRIBED!`

    if (visa.checked) payResult.textContent =  `You are paying with Visa`;
    else if (masterCard.checked) payResult.textContent =  `You are paying with MasterCard`;
    else if (paypal.checked) payResult.textContent =  `You are paying with PayPal`;
    else payResult.textContent =  `Select a payment option!`;
}