
let cityName = prompt("Enter the city name:");

        // Checking if the entered city is Karachi
        if (cityName && cityName.toLowerCase() === "karachi") {
            console.log("Welcome to the city of lights");
            alert("Welcome to the city of lights"); // Added alert for user-friendly notification
        } else {
            console.log("Welcome to " + cityName);
            alert("Welcome to " + cityName); // Added alert for user-friendly notification
        }
            
            let gender = prompt("Enter your gender:").toLowerCase();

        // Check the entered gender and display the corresponding message
        if (gender === "male") {
            alert("Good Morning Sir");
        } else if (gender === "female") {
            alert("Good Morning Ma’am");
        } else {
            alert("Invalid input. Please enter 'male' or 'female'.");
        }

        // Prompt the user to enter the traffic signal color
        let color = prompt("Enter the traffic signal color (Red, Yellow, Green):").toLowerCase();

        // Determine the message based on the color
        let Message;
        if (color === 'red') {
            message = 'Must Stop';
        } else if (color === 'yellow') {
            message = 'Ready to move';
        } else if (color === 'green') {
            message = 'Move now';
        } else {
            message = 'Invalid color. Please enter Red, Yellow, or Green.';
        }

        // Show the message in an alert box
        alert(message);

         // Prompt the user to enter the remaining fuel in litres
            let fuel = prompt("Enter the remaining fuel in your car (in litres):");

            // Directly compare the string input to 0.25
            if (fuel < 0.25) {
                alert("Please refill the fuel in your car");
            } else {
                alert("You have enough fuel");
            }


            // Part a: Checking condition for variable a
            let aa = 4;
            if (++aa === 5){ // Pre-increment a and check if it's equal to 5
                alert("given condition for variable a is true"); // If condition is true, display alert
            }
            
            // Part b: Checking condition for variable b
            let b = 82;
            if (b++ === 83){ // Post-increment b and check if it's equal to 83
                alert("given condition for variable b is true"); // If condition is true, display alert
            }
            
            // Part c: Checking multiple conditions for variable c
            let c = 12;
            if (c++ === 13){ // Post-increment c and check if it's equal to 13
                alert("condition 1 is true"); // If condition is true, display alert
            }
            if (c === 13){ // Check if c is equal to 13
                alert("condition 2 is true"); // If condition is true, display alert
            }
            if (++c < 14){ // Pre-increment c and check if it's less than 14
                alert("condition 3 is true"); // If condition is true, display alert
            }
            if(c === 14){ // Check if c is equal to 14
                alert("condition 4 is true"); // If condition is true, display alert
            }
            
            // Part d: Comparing total cost
            let materialCost = 20000;
            let laborCost = 2000;
            let totalCost = materialCost + laborCost;
            if (totalCost === laborCost + materialCost){ // Check if total cost is equal to sum of material cost and labor cost
                alert("The cost equals"); // If condition is true, display alert
            }
            
            // Part e: Displaying true regardless of condition
            if (true){ // This condition will always be true
                alert("True"); // Display alert
            }
            
            // Part f: Comparing strings lexically
            if("car" < "cat"){ // Lexicographically comparing "car" and "cat"
                alert("car is smaller than cat"); // If condition is true, display alert
        



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
} else if (userGuess + 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else if (userGuess - 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Try again! The secret number was " + secretNumber);
}
const Number = Number(prompt("Enter a number to check if it is divisible by 3:"));

// Check if the number is divisible by 3
if (usernumber % 3 === 0) {
    alert("The number " + userNumber + " is divisible by 3.");
} else {
    alert("The number " + userNumber + " is not divisible by 3.");
}
 // Prompt user to enter a number
const userNumber= Number(prompt("Enter a number to check if it is even or odd:"));

// Check if the number is even or odd
if (userNumber % 4 === 0) {
    alert("The number " + userNumber + " is even.");
} else {
    alert("The number " + userNumber + " is odd.");
    } 
    {
    
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


    // Get input values from user
let subject1 = Number(prompt("Enter marks obtained in Subject 1:"));
let subject2 = Number(prompt("Enter marks obtained in Subject 2:"));
let subject3 = Number(prompt("Enter marks obtained in Subject 3:"));
let totalMarks = Number(prompt("Enter total marks:"));

// Calculate total obtained marks
let marksObtained = subject1 + subject2 + subject3;

// Calculate percentage
let percentage = (marksObtained / totalMarks) * 100;

// Determine grade and remarks
let grade;
let remarks;

if (percentage >= 90) {
    grade = 'A+';
    remarks = 'Excellent';
} else if (percentage >= 80) {
    grade = 'A';
    re
    
    
    marks = 'Very Good';
} else if (percentage >= 70) {
    grade = 'B';
    remarks = 'Good';
} else if (percentage >= 60) {
    grade = 'C';
    remarks = 'Satisfactory';
} else if (percentage >= 50) {
    grade = 'D';
    remarks = 'Needs Improvement';
} else {
    grade = 'F';
    remarks = 'Fail';
}

// Display the result using alert
alert(`Marks Sheet\n
      Total marks: ${totalMarks}\n
      Marks obtained: ${marksObtained}\n
      Percentage: ${percentage.toFixed(2)}%\n
      Grade: ${grade}\n
      Remarks: ${remarks}`);


            }
        }