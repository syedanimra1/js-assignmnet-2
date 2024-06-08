
   // Take input from the user
let firstNumber = prompt("Enter the first number:");
let secondNumber = prompt("Enter the second number:");
let operation = prompt("Enter the operation (+, -, *, /, %):");

let result;

// Convert input to numbers using the "+" operator
firstNumber = +firstNumber;
secondNumber = +secondNumber;

// Perform the operation based on the operator entered by the user
if (operation === '+') {
    result = firstNumber + secondNumber; // Addition
} else if (operation === '-') {
    result = firstNumber - secondNumber; // Subtraction
} else if (operation === '*') {
    result = firstNumber * secondNumber; // Multiplication
} else if (operation === '/') {
    if (secondNumber !== 0) {
        result = firstNumber / secondNumber; // Division
    } else {
        result = "Cannot divide by zero!";
    }
} else if (operation === '%') {
    if (secondNumber !== 0) {
        result = firstNumber % secondNumber; // Modulos
    } else {
        result = "Cannot modulo by zero!";
    }
} else {
    result = "Invalid operation!";
}

// Display the result to the user
alert("Result: " + result);

const secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt user to guess the secret number
const userGuess = Number(prompt("Guess the secret number (between 1 and 10):"));

// Check if the user's guess is correct or close enough
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Try again! The secret number was " + secretNumber);
}

const userNumber = Number(prompt("Enter a number to check if it is divisible by 3:"));

// Check if the number is divisible by 3
if (userNumber % 3 === 0) {
    alert("The number " + userNumber + " is divisible by 3.");
} else {
    alert("The number " + userNumber + " is not divisible by 3.");
}

// Prompt user to enter a number
const userNumberEvenOdd = Number(prompt("Enter a number to check if it is even or odd:"));

// Check if the number is even or odd
if (userNumberEvenOdd % 2 === 0) {
    alert("The number " + userNumberEvenOdd + " is even.");
} else {
    alert("The number " + userNumberEvenOdd + " is odd.");
}

// Prompt user to enter the temperature
const temperature = Number(prompt("Enter the temperature:"));

// Check the temperature and show the appropriate message
if (temperature > 40) {
    console.log("It is too hot outside.");
} else if (temperature > 30) {
    console.log("The Weather today is Normal.");
} else if (temperature > 20) {
    console.log("Today’s Weather is cool.");
} else if (temperature > 10) {
    console.log("OMG! Today’s weather is so Cool.");
} else {
    console.log("It's very cold outside!");
}

// Take input character from the user
let input = prompt("Enter a character:");

// Check if the input is a number
if (input >= '0' && input <= '9') {
    console.log("The input is a number.");
}
// Check if the input is an uppercase letter
else if (input >= 'A' && input <= 'Z') {
    console.log("The input is an uppercase letter.");
}
// Check if the input is a lowercase letter
else if (input >= 'a' && input <= 'z') {
    console.log("The input is a lowercase letter.");
}
// If the input doesn't match any of the above conditions, it's not a valid character
else {
    console.log("Invalid input.");
}

// Take two inputs from the user
let firstInteger = Number(prompt("Enter the first integer:"));
let secondInteger = Number(prompt("Enter the second integer:"));

// Compare the two numbers and display the appropriate message
if (firstInteger > secondInteger) {
    console.log("The larger number is: " + firstInteger);
} else if (secondInteger > firstInteger) {
    console.log("The larger number is: " + secondInteger);
} else {
    console.log("Both numbers are equal.");
}

// Take input from the user
let number = Number(prompt("Enter a number:"));

// Check if the number is positive, negative, or zero
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else if (number === 0) {
    console.log("The number is zero.");
} else {
    console.log("Invalid input. Please enter a valid number.");
}

// Function to check if a character is a vowel
function isVowel(inputChar) {
    // Convert the character to lowercase for case insensitive comparison
    inputChar = inputChar.toLowerCase();

    // List of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Check if the character is in the list of vowels
    return vowels.includes(inputChar);
}

// Take input from the user
input = prompt("Enter a single character:");

// Check if the input is exactly one character long
if (input.length === 1) {
    // Check if the input character is a vowel and display the result
    if (isVowel(input)) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log("Please enter a single character.");
}

// a. Store correct password in a JS variable
const correctPassword = "mySecretPassword";

// b. Ask user to enter his/her password
let userPassword = prompt("Enter your password:");

// c. Validate the two passwords

// i. Check if user has entered a password
if (userPassword === null || userPassword === "") {
    alert("Please enter your password.");
} else {
    // ii. Check if both passwords are the same
    if (userPassword === correctPassword) {
        alert("Correct! The password you entered matches the original password.");
    } else {
        alert("Incorrect password.");
    }
}

let message;
let hour = 13; // Set the current hour

// Check if the hour is less than 18 (6 PM)
if (hour < 18) {
    message = "Good day"; // If the condition is true, set message to "Good day"
} else {
    message = "Good evening"; // If the condition is false, set message to "Good evening"
}

// Display the message
console.log(message);

// Take input from the user
let timeInput = prompt("Enter time in 24-hour format (e.g., 1900):");

// Ensure the input is a number and within the valid range
if (isNaN(timeInput) || timeInput.length !== 4 || timeInput < 0 || timeInput > 2359) {
    console.log("Invalid time. Please enter a valid time in 24-hour format (e.g., 1900).");
} else {
    console.log("Valid time entered: " + timeInput);
}  