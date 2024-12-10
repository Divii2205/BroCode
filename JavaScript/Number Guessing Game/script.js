const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

const input = document.querySelector("#input");
const button = document.querySelector("#submit");
const message = document.querySelector(".message");
const body = document.querySelector("body");
const congratsImage = document.querySelector("#congratsImage");

let attempts = 0;

button.addEventListener('click', function(e){
    e.preventDefault();

    let guess = input.value;

    if (guess === " " || isNaN(guess) || guess > maxNum || guess < minNum){
        message.textContent = "Enter a valid number!";
        message.className = 'message invalid';
        return;
    }
    else {
        attempts++;
        if (guess < answer){
            message.textContent  = `${guess} is too LOW! Try again`;
            message.className = 'message too-low'
        }
        else if (guess > answer){
            message.textContent = `${guess} is too HIGH! Try again`;
            message.className = 'message too-high';
        }
        else{
            message.textContent = `CORRECT! The number was ${answer}. It took you ${attempts} attempts.`;
            body.classList.add('correct');
            message.className = 'message correct-message';
            input.disabled = true;
        }
        input.value = "";
    }
})

// let running = true;

// while (running){
//     guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
//     guess = Number(guess);

//     if (isNaN(guess)) window.alert("Enter a valid number!");
//     else if (guess > maxNum) window.alert("Enter a valid number!");
//     else if (guess < minNum) window.alert("Enter a valid number!");
//     else {
//         attempts++;
//         if (guess < answer) window.alert("Too LOW! Try again");
//         else if (guess > answer) window.alert("Too HIGH! Try again");
//         else {
//             window.alert(`CORRECT! The number was ${answer}. It took you ${attempts} attempts`);
//             running = false;
//         }
//     }
// }