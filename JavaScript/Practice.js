// -------Ternary operator-------
// let time = 16;
// let greeting = time < 12 ? "Good morning" : "Good afternoon";
// console.log(greeting);

// let isStudent = false;
// let message = isStudent ? "You are a student" : "You are NOT a student";
// console.log(message);

// let purchAmt = 15;
// let discount = purchAmt >= 100 ? 10 : 0;
// console.log(`Your total is $${purchAmt - purchAmt * (discount/100)}`);

// -------Switch methods-------
// let day = "helloooo";

// switch (day){
//     case 1:
//         console.log(`It is Monday`);
//         break;
//     case 2:        
//         console.log(`It is Tuesday`);
//         break;
//     case 3:
//         console.log(`It is Wedday`); 
//         break;   
//     case 4:
//         console.log(`It is Thurday`);
//         break;
//     case 5:        
//         console.log(`It is Friday`);
//         break;
//     case 6:
//         console.log(`It is Satday`);
//         break;
//     case 7:
//         console.log(`It is Sunday`); 
//         break; 
//     default:
//         console.log(`${day} is not a day`);
// }

// let score = 78;
// let grade;

// switch (true){
//     case score > 100:
//         grade = "Invalid!";
//         break;
//     case score >= 90:
//         grade = "A";
//         break;   
//     case score >= 80:
//         grade = "B";
//         break;
//     case score >= 70:
//         grade = "C";
//         break;
//     case score >= 60:
//         grade = "D";
//         break;
//     default:
//         grade = "F";
// }
// console.log(grade);

// ------String methods------
// 1. charAt(<index>)
// 2. toLowerCase() 
// 3. toUpperCase()
// 4. indexOf(<substring>)
// 5. lastIndexOf()
// 6. trim()
// 7. repeat(<integer>)
// 8. startsWith(<substring>)
// 9. endsWith(<substring>)
// 10. includes(<sunstring>)
// 11. replace(<substring>, <replace characters>)
// 12. padStart(<char length>, <pad with?>)
// 13. padEnd(<char length>, <pad with?>)
// 14. slice(start, end)

// -------No method chaining-------
// let username = window.prompt("Enter your username: ");
// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();
// let name = username.toLowerCase();
// name = name.slice(1)
// username = letter + name;
// console.log(username);

// -------Using method chaining-------
// // !!!! Method chaining = Calling one method after another in one continuous line of code

// let username = window.prompt("Enter your username: ");
// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username);

// ------NOTE-------
//   = assignment operator
//  == comparison operator (compares if values are equal)
// === strict equality operator (compares if values & datatypes are equal)
//  != inequality operator
// !== strict inequality operator

// -------do with while loop-------
// let username;
// do{
//     username = window.prompt(`Enter your username`)
// } while (username === "" || username === null) 
// console.log(`Hello ${username}`);

