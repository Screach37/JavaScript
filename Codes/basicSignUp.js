const uid = "abc123";

var fullName = "Akshat Sharma";
var email = "abc@xyz.com";
var passwd = "123456";
var confirmPasswd = "123456";
var courseCount = 1;
var isLoggedInFromGoogle = false;

// to take input - fullName = prompt("Enter your name");
// duplicate lines - shift alt;
console.log(uid);
console.log("Full name is: " + fullName);
console.log("Email is :", email);

//for multiple entries we can use ` (below esc key)

console.log(`
    With Unique Id: ${uid}
    User is : ${fullName}
    Email is : ${email}
    and passwd is : ${passwd}
`);
