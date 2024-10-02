// CHAPTER 21 - 26 //

// Q # 1:
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "!");

// Q # 2:
var favoritePhoneModel = prompt("Enter your favorite mobile phone model:");
var inputLength = favoritePhoneModel.length;

document.write("Your favorite mobile phone model is: " + favoritePhoneModel + "<br>");
document.write("The length of your input is: " + inputLength + "<br>");

// Q # 3:
var word = "Pakistani";
var indexOfN = word.indexOf("n");

document.write("The word is: " + word + "<br>");
document.write("The index of letter 'n' is: " + indexOfN + "<br>");

// Q # 4:
var phrase = "Hello World";
var lastIndexOfL = phrase.lastIndexOf("l");

document.write("The phrase is: " + phrase + "<br>");
document.write("The last index of letter 'l' is: " + lastIndexOfL + "<br>");

// Q # 5:
var word = "Pakistani";
var charAtIndex3 = word.charAt(3);

document.write("The word is: " + word + "<br>");
document.write("The character at the 3rd index is: " + charAtIndex3 + "<br>");

// Q # 7:
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");

document.write("The original word is: " + city + "<br>");
document.write("The new word is: " + newCity + "<br>");

// Q # 8:
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");

document.write("The original message is: " + message + "<br>");
document.write("The new message is: " + newMessage + "<br>");

// Q # 9:
var stringValue = "472";
var numberValue = Number(stringValue);

document.write("The value as a string is: " + stringValue + " (Type: " + typeof stringValue + ")<br>");
document.write("The value as a number is: " + numberValue + " (Type: " + typeof numberValue + ")<br>");

// Q # 10:
var userInput = prompt("Enter some text:");
var upperCaseInput = userInput.toUpperCase(" ");

console.log(upperCaseInput);

// Q # 11:
// function ToTitleCase() {
//     var input = document.write("userInput").value;
//     var titleCase = input.toLowerCase().split(' ').map(function(word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(' ');

//     document.write("result").innerText = titleCase;
// }

// Q # 12:
var num = 35.36;
var numString = num.toString();
var result = numString.replace('.', '');

console.log(result);

// Q # 13:
function isValidUsername(username) {
    const specialChars = [33, 44, 46, 64];
      for (let char of username) {
        if (specialChars.includes(char.charCodeAt(0))) {
            return false;
        }
    }
    return true; 
}

let username = prompt("Enter your username:");

while (!isValidUsername(username)) {
    username = prompt("Invalid username. Please enter a valid username (without special characters like @, ., !, and ,):" + "<br>");
}

document.write("Your username is: " + username);


// Q # 14:
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchItem = prompt("Enter the item you want to search for:");

var found = A.some(function(item) {
    return item.toLowerCase() === searchItem.toLowerCase();
});
if (found) {
    document.write("The item '" + searchItem + "' is found in the list.");
} 
else {
    document.write("The item '" + searchItem + "' is not found in the list." + "<br>");
}



// CHAPTER # 26 - 30 //

// Q # 1

var userInput = prompt("Enter a positive integer:");
var number = parseFloat(userInput);

if (!isNaN(number) && number > 0) {

    document.write("Number: " + number + "<br>");

    // Calculating the rounded value
    let roundedValue = Math.round(number);
    document.write("Rounded value: " + roundedValue + "<br>");

    // Calculating the floor value
    let floorValue = Math.floor(number);
    document.write("Floor value: " + floorValue + "<br>");

    // Calculating the ceiling value

    let ceilValue = Math.ceil(number);
    document.write("Ceil value: " + ceilValue + "<br>");
} else {
    document.write("Please enter a valid positive integer.");
}

// Q # 2:
var userInput = prompt("Enter a negative floating-point number:");
var number = parseFloat(userInput);

if (!isNaN(number) && number < 0) {
    // Displaying the number
    document.write("Number: " + number + "<br>");

    // Calculating the rounded value
    let roundedValue = Math.round(number);
    document.write("Rounded value: " + roundedValue + "<br>");

    // Calculating the floor value
    let floorValue = Math.floor(number);
    document.write("Floor value: " + floorValue + "<br>");

    // Calculating the ceiling value
    let ceilValue = Math.ceil(number);
    document.write("Ceil value: " + ceilValue + "<br>");
} else {
    document.write("Please enter a valid negative floating-point number.");
}

// Q # 3:
var userInput = prompt("Enter a number:");
var number = parseFloat(userInput);
var absoluteValue = Math.abs(number);

document.write("The absolute value of " + number + " is: " + absoluteValue + "<br>");

// Q # 4:
function rollDice() {
    var diceValue = Math.floor(Math.random() * 6) + 1;
    return diceValue;
}
var diceRoll = rollDice();

document.write("You rolled a dice and the value is: " + diceRoll + "<br>");

// Q # 5:
function tossCoin() {
    var coinValue = Math.random();
    if (coinValue < 0.5) {
        return "Heads";
    } else {
        return "Tails";
    }
}
var coinTossResult = tossCoin();
document.write("You tossed a coin and it landed on: " + coinTossResult + "<br>");

// Q # 6:
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
var randomNumber = getRandomNumber();
document.write("A random number between 1 and 100 is: " + randomNumber + "<br>");

// Q # 7:
function parseWeight(input) {
    const regex = /^(\d+(\.\d+)?)(kg|kgs|kilograms)?$/i;
    const match = input.match(regex);

    if (match) {
        var weight = parseFloat(match[1]);
        return weight;
    } else {
        return null; 
    }
}
var userInput = prompt("Please enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):")
var weight = parseWeight(userInput);
if (weight !== null) {
    document.write("Your weight is: " + weight + " kg" + "<br>");
} else {
    document.write("Invalid input. Please enter a valid weight." + "<br>");
}

// Q # 8:
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userInput = prompt("Guess the secret number (between 1 and 10):");
var guessedNumber = parseInt(userInput);
if (guessedNumber === secretNumber) {
    document.write("Congratulations! You guessed the secret number: " + secretNumber + "<br>");
} else {
    document.write("Sorry, the secret number was: " + secretNumber + ". Better luck next time!" + "<br>");
}

                 // // // // // // // // // // // // // // // // 

                     //  TASK QUESTIONS //

// Q # 1:
function generateRandomPassword(length) {
    
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()-_=+[]{}|;:',.<>?/`~";

    const allCharacters = lowercase + uppercase + numbers + specialCharacters;

var password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }

    return password;
}

let passwordLength = prompt("Enter the desired password length (minimum 8 characters):");
passwordLength = parseInt(passwordLength);
if (isNaN(passwordLength) || passwordLength < 8) {
    document.write("Please enter a valid number greater than or equal to 8." + "<br>");
} 
else {
    const randomPassword = generateRandomPassword(passwordLength);
    document.write("Your randomly generated password is: " + randomPassword + "<br>");
}

// Q # 2:
function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
var userInput = prompt("Enter a word or phrase to check if it's a palindrome:");
if (isPalindrome(userInput)) {
    document.write("Yes, '" + userInput + "' is a palindrome.");
} else {
    document.write("No, '" + userInput + "' is not a palindrome." + "<br>");
}


            //  // // // // // // // // // // // // // // // // // // 




