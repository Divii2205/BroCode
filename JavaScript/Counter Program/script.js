// operator precedence
// 1. parenthesis()
// 2. exponents
// 3. multiplication & division & modulo
// 4. addition & subtraction

const decreaseBtn = document.querySelector("#decreaseBtn")
const resetBtn = document.querySelector("#resetBtn")
const increaseBtn = document.querySelector("#increaseBtn")
const countLabel = document.querySelector("#countLabel")

let count = 0;

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}

resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}

