function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!@#$%^&*()+=-";
    const numbers = "0123456789";
    
    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCase : "";
    allowedChars += includeUpperCase ? upperCase : "";
    allowedChars += includeSymbols ? symbols : "";
    allowedChars += includeNumbers ? numbers : "";

    if (length <= 0) return `Password length must be at least 1`;
    if (allowedChars.length === 0) return `At least 1 of the options must be selected`;

    for (let i = 0; i<length; i++){
        const index = Math.floor(Math.random()*allowedChars.length);
        password += allowedChars[index];
    }
    return password;;
}

const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const btn = document.querySelector("#generateBtn");
const passwordText = document.querySelector("#passGen");

btn.addEventListener('click', function(){
    const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
    passwordText.textContent = `${password}`;

})