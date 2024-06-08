
// Declare an empty array using JavaScript literal notation to store student names
let studentNames = [];
// Add student names to the array in the future
studentNames.push("Alina");
studentNames.push("Sara");
studentNames.push("Muqaddss");

// Display the student names in the array
console.log(studentNames); // Output: ["Alina", "Sara", "Muqaddas"]

// Declare and initialize a numbers array
let numbers = [1, 2, 3, 4, 5];

// Accessing elements in the array
console.log(numbers[0]); // Output: 1
console.log(numbers[1]); // Output: 2

// Adding a new element to the array
numbers.push(6);

// Display the updated array
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]



// Declare and initialize a boolean array
let booleanArray = [true, false, true, false];

// Accessing elements in the array
console.log(booleanArray[0]); // Output: true
console.log(booleanArray[1]); // Output: false

// Adding a new element to the array
booleanArray.push(true);

// Display the updated array
console.log(booleanArray); // Output: [true, false, true, false, true]
 // Declare and initialize a mixed array
let mixedArray = [1, "Alice", true, 3.14, { name: "Bob" }, [2, 4, 6]];

// Accessing elements in the array
console.log(mixedArray[0]); // Output: 1
console.log(mixedArray[1]); // Output: "Alice"
console.log(mixedArray[4].name); // Output: "Bob"
console.log(mixedArray[5][1]); // Output: 4

// Adding a new element to the array
mixedArray.push(false);

// Display the updated array
console.log(mixedArray); // Output: [1, "Alice", true, 3.14, { name: "Bob" }, [2, 4, 6], false]
 // Declare and initialize an array with education qualifications in Pakistan
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// Build the list of qualifications as a string
let qualificationsText = "Qualifications:\n\n";
for (let i = 0; i < qualifications.length; i++) {
    qualificationsText += (i + 1) + ") " + qualifications[i] + "\n";
}

// Show the qualifications in an alert
alert(qualificationsText);
            

            // Initialize an array with color names
            let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
            
            // Function to display the array elements using alert
            function displayColors(message) {
                alert(message + "\nColors: " + colors.join(", "));
            }
            
            // Initial display of colors
            displayColors("Initial colors");
            
            // a. Ask the user what color to add to the beginning
            let colorToAddBeginning = prompt("Enter a color to add to the beginning:");
            if (colorToAddBeginning) {
                colors.unshift(colorToAddBeginning);
                displayColors("After adding color to the beginning");
            }
            
            // b. Ask the user what color to add to the end
            let colorToAddEnd = prompt("Enter a color to add to the end:");
            if (colorToAddEnd) {
                colors.push(colorToAddEnd);
                displayColors("After adding color to the end");
            }
            
            // c. Add two more colors to the beginning
            colors.unshift("Pink", "Orange");
            displayColors("After adding two more colors to the beginning");
            
            // d. Delete the first color in the array
            colors.shift();
            displayColors("After deleting the first color");
            
            // e. Delete the last color in the array
            colors.pop();
            displayColors("After deleting the last color");
            
            // f. Ask the user at which index to add a color and the color name
            let indexToAdd = prompt("Enter the index at which you want to add a color:");
            let colorNameToAdd = prompt("Enter the color name to add at index " + indexToAdd + ":");
            if (indexToAdd !== null && colorNameToAdd) {
                colors.splice(Number(indexToAdd), 0, colorNameToAdd);
                displayColors("After adding a color at index " + indexToAdd);
            }
            
            // g. Ask the user at which index to delete colors and how many colors to delete
            let indexToDelete = prompt("Enter the index from which you want to delete color(s):");
            let numOfColorsToDelete = prompt("Enter the number of colors you want to delete:");
            if (indexToDelete !== null && numOfColorsToDelete) {
                colors.splice(Number(indexToDelete), Number(numOfColorsToDelete));
                displayColors("After deleting " + numOfColorsToDelete + " color(s) from index " + indexToDelete);
            }

            // Array to store student scores
let studentScores = [320, 230, 480, 120];

// Display initial scores
alert("Scores of Students: " + studentScores.join(","));

// Sort the array in ascending order
studentScores.sort((a, b) => a - b);

// Display ordered scores
alert("Ordered Scores of Students: " + studentScores.join(","));
 // Initialize an array with city names
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// Copy elements from cities array to selectedCities array
let selectedCities = cities.slice(2, 4); // Copying "Islamabad" and "Quetta"

// Display the cities list
alert("Cities list: " + cities.join(","));

// Display the selected cities list
alert("Selected cities list: " + selectedCities.join(","));
// Initialize the array
let arr = ["This ", " is ", " my ", " cat"];

// Create a single string from the array
let singleString = arr.join("");

// Display the single string
console.log(singleString);
alert(singleString);
const myQueue = [];

    // Enqueue items
    myQueue.push(1);
    myQueue.push(2);
    myQueue.push(3);
    
    // Size of the queue
    console.log("Size of the queue:", myQueue.length);
    
    // Dequeue items
    console.log("Dequeuing:", myQueue.shift()); // Should dequeue 1
    console.log("Dequeuing:", myQueue.shift()); // Should dequeue 2
    console.log("Dequeuing:", myQueue.shift()); // Should dequeue 3
    
    // Size of the queue after dequeue operations
    console.log("Size of the queue after dequeue operations:", myQueue.length);
    const myStack = [];

    // Add items to the top of the stack
    myStack.push(1);
    myStack.push(2);
    myStack.push(3);
    
    console.log("Stack:", myStack);
    
    // Remove and return the top item from the stack
    console.log("Popping:", myStack.pop()); // Should pop 3
    console.log("Popping:", myStack.pop()); // Should pop 2
    console.log("Popping:", myStack.pop()); // Should pop 1
    console.log("Stack after popping:", myStack);
// Array of phone manufacturers
const phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Start building the select element
let selectHTML = "<select>";

// Iterate through the array and create an option element for each manufacturer
phoneManufacturers.forEach(manufacturer => {
    selectHTML += `<option value="${manufacturer}">${manufacturer}</option>`;


});