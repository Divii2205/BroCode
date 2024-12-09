const minNum = 1;
const maxNum = 30;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if (isNaN(guess)) window.alert("Enter a valid number!");
    else if (guess > maxNum) window.alert("Enter a valid number!");
    else if (guess < minNum) window.alert("Enter a valid number!");
    else {
        attempts++;
        if (guess < answer) window.alert("Too LOW! Try again");
        else if (guess > answer) window.alert("Too HIGH! Try again");
        else {
            window.alert(`CORRECT! The number was ${answer}. It took you ${attempts} attempts`);
            running = false;
        }
    }
}