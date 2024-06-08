// 1. Select Element for Phone Manufacturers
let phoneManufacturers = ["Apple", "Samsung", "Huawei", "Xiaomi", "Oppo", "Vivo", "Motorola"];
let selectHTML = "<select>";
phoneManufacturers.forEach(manufacturer => {
    selectHTML += `<option value="${manufacturer}">${manufacturer}</option>`;
});
selectHTML += "</select>";
document.write(selectHTML);

// 2. Multidimensional Array String Conversion
const multidimensionalArray = [];
multidimensionalArray.push([1, 2, 3]);
multidimensionalArray.push([4, 5, 6]);

let arrayString = "[";
for (let i = 0; i < multidimensionalArray.length; i++) {
    arrayString += "[";
    for (let j = 0; j < multidimensionalArray[i].length; j++) {
        arrayString += multidimensionalArray[i][j];
        if (j < multidimensionalArray[i].length - 1) {
            arrayString += ", ";
        }
    }
    arrayString += "]";
    if (i < multidimensionalArray.length - 1) {
        arrayString += ", ";
    }
}
arrayString += "]";
console.log(arrayString);

// 3. Matrix String Display
let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
let matrixString = '';
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        matrixString += matrix[i][j] + ' ';
    }
    matrixString += '\n';
}
alert(matrixString);

// 4. For Loop to Count Numbers and Multiplication Table
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
let tableNumberInput = prompt("Enter the number for multiplication table:");
let tableLengthInput = prompt("Enter the length of the multiplication table:");
let tableNumber = Number(tableNumberInput);
let tableLength = Number(tableLengthInput);

if (Number.isNaN(tableNumber) || Number.isNaN(tableLength)) {
    console.log("Invalid input. Please enter valid numbers.");
} else {
    console.log("Multiplication table for " + tableNumber + ":");
    for (let i = 1; i <= tableLength; i++) {
        console.log(tableNumber + " * " + i + " = " + (tableNumber * i));
    }
}

// 5. Iterate Over Fruits Array
const fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 6. Counting Series
document.write("<p>Counting: ");
for (let i = 1; i <= 15; i++) {
    document.write(i);
    if (i < 15) {
        document.write(", ");
    }
}
document.write("</p>");

document.write("<p>Reverse counting: ");
for (let i = 10; i >= 1; i--) {
    document.write(i);
    if (i > 1) {
        document.write(", ");
    }
}
document.write("</p>");

document.write("<p>Even: ");
for (let i = 0; i <= 20; i += 2) {
    document.write(i);
    if (i < 20) {
        document.write(", ");
    }
}
document.write("</p>");

document.write("<p>Odd: ");
for (let i = 1; i <= 19; i += 2) {
    document.write(i);
    if (i < 19) {
        document.write(", ");
    }
}
document.write("</p>");

document.write("<p>Series: ");
for (let i = 2; i <= 20; i += 2) {
    document.write(i + "k");
    if (i < 20) {
        document.write(", ");
    }
}
document.write("</p>");

// 7. Array Search
const A = ["cake", "apple pie", "cookie", "chips", "patties"];
const userInput = prompt("Enter an item to search:").toLowerCase();

if (A.includes(userInput)) {
    alert(`Yes, '${userInput}' is found in the list.`);
} else {
    alert(`No, '${userInput}' is not found in the list.`);
}

// 8. Smallest Number in Array
let B = [24, 53, 78, 91, 12];
let smallestNumber = B[0];
for (let i = 1; i < B.length; i++) {
    if (B[i] < smallestNumber) {
        smallestNumber = B[i];
    }
}
console.log("The smallest number in the array is: " + smallestNumber);

// 9. Greeting User
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "! Welcome!");

// 10. Phone Model Length
let phoneModel = prompt("Enter your favorite mobile phone model:");
let length = phoneModel.length;
alert("Length of your input: " + length);

// 11. Index of 'n' in 'Pakistani'
function task3() {
    let word = "Pakistani";
    let index = word.indexOf('n');
    alert("Index of 'n' in 'Pakistani': " + index);
}
task3();

// 12. Last Index of 'l' in 'Hello World'
function task1() {
    let word = "Hello World";
    let lastIndex = word.lastIndexOf('l');
    alert("Last index of 'l' in 'Hello World': " + lastIndex);
}
task1();

// 13. Word Replacement
let word1 = "Hyderabad";
let replacedWord = word1.replace("Hyder", "Islam");
alert("Original Word: " + word1 + "\nReplaced Word: " + replacedWord);

// 14. String to Number Conversion
let stringNumber = "472";
let convertedNumber = Number(stringNumber);
alert("Value: " + convertedNumber + "\nType: " + typeof convertedNumber);

// 15. Title Case Conversion
let userText = prompt("Enter your text:");
let titleCaseText = userText.toLowerCase().replace(/\b\w/g, function(match) {
    return match.toUpperCase();
});
alert(titleCaseText);

// 16. Username Validation
let username = prompt("Enter your username:");
if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
    alert("Please enter a valid username without special symbols [@, ., , !]");
} else {
    alert("Username: " + username);
}

// 17. Password Validation
let password = prompt("Enter your password:");
let containsAlphabets = /[a-zA-Z]/.test(password);
let containsNumbers = /[0-9]/.test(password);
let startsWithAlphabet = /^[a-zA-Z]/.test(password);
let isAtLeastSixCharactersLong = password.length >= 6;

if (containsAlphabets && containsNumbers && startsWithAlphabet && isAtLeastSixCharactersLong) {
    alert("Password is valid.");
} else {
    alert("Please enter a valid password that contains alphabets and numbers, does not start with a number, and is at least 6 characters long.");
}

// 18. Display Last Character
let userInputLastChar = prompt("Enter a string:");
if (userInputLastChar !== null && userInputLastChar !== "") {
    let lastCharacter = userInputLastChar[userInputLastChar.length - 1];
    alert("The last character of the string is: " + lastCharacter);
} else {
    alert("Input cannot be empty.");
}

// 19. String to Array
let university = "University of Karachi";
let arrayOfChars = university.split("");
document.write(arrayOfChars.join("<br>"));

// 20. Word Count in Sentence
let sentence = prompt("Enter a sentence:");
let wordToFind = prompt("Enter a word to find its occurrence:");
let wordsArray = sentence.split(" ");
let count = 0;
for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].toLowerCase() === wordToFind.toLowerCase()) {
        count++;
    }
}
alert(`The word '${wordToFind}' appears ${count} times in the sentence.`);
