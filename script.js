// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  // If the user cancelled when they were asked for a number, it does not fill in the textarea
  if (password !== undefined){

    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

}

// declaring string of characters used for the password
var lowerCaseList = "abcdefghijklmnopqrstuvwxyz";
var upperCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberList = "0123456789";
var specialList = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";

// Asks user a series of questions and generates the password accordingly 
function generatePassword() {
  
  // Ask user for a number between 8 and 128
  var n = prompt("Please enter the number of characters you wish your password to be. You can choose a number between 8 and 128.");
  
  // The while loop will continue until the user enters a number between 8 and 128 or press Cancel
  while (true) {

    // If the user press Cancel when they were asked for a number, it stops the function. It will not return any value in the text area.
    if (n === null){
      return;
    }

    // Checks if the user entered a number and whether it is bewteen 8 and 128
    if (Number.isInteger(parseInt(n))) {
      if (n >= 8 && n <= 128) {
        break;
      }      
      else{
        n = prompt("You did not enter a number between 8 and 128. Please enter a number between 8 and 128.");
      }
    }
    else {
      n = prompt("You did not enter a number. Please enter a number between 8 and 128.");
    }
  }

  // Alerts the user that there is a series of questions regarding the criteria of the password
  alert('Please choose one or more of the four criteria for you password. Press OK to include and cancel to exclude')

  var listOfCharacters = ""; //the strings will be appended to this variable whent the user has chosen the criteria

  var password = ""; // initialize empty string for password

  // The while loop will break when the user has chosen at least one of the 4 options
  while (true) {
    
    // checks with user whether they want lowercase characters. 
    var lowerChar = confirm("Would you like to use lowercase characters in your password?");
    // if user wants lowercase characters
    if (lowerChar) { 
      var k = randomNumber(lowerCaseList.length);
      listOfCharacters = listOfCharacters.concat(lowerCaseList); // appends the lowercase list to the final list
      // password = password.concat(lowerCaseList[Math.round(Math.random()*(lowerCaseList.length-1))]); // adds a lowercase character to password to ensure at least one exists in password
      // password = password.concat(lowerCaseList[randomNumber(lowerCaseList.length)]);
      password = password.concat(lowerCaseList[k]);
      console.log("k",k);
    }

    // checks with user whether they want uppercase characters. 
    var upperChar = confirm("Would you like to use uppercase characters in your password?");
    // if user wants uppercase characters
    if (upperChar) { 
      listOfCharacters = listOfCharacters.concat(upperCaseList); // appends the uppercase list to the final list
      // password = password.concat(upperCaseList[Math.round(Math.random()*(upperCaseList.length-1))]); // adds an uppercase character to password to ensure at least one exists in password
      password = password.concat(upperCaseList[randomNumber(upperCaseList.length)]);
    }

    // checks with user whether they want numbers. 
    var numberChar = confirm("Would you like to use number characters in your password?");
    // if user wants numbers
    if (numberChar) {
      listOfCharacters = listOfCharacters.concat(numberList); // appends the number list to the final list
      // password = password.concat(numberList[Math.round(Math.random()*(numberList.length-1))]); // adds an number character to password to ensure at least one exists in password
      password = password.concat(numberList[randomNumber(numberList.length)]);
    }

    // checks with user whether they want special characters. 
    var specialChar = confirm("Would you like to use special characters in your password?");
    // if user wants special characters
    if (specialChar) {
      listOfCharacters = listOfCharacters.concat(specialList); // appends the special list to the final list
      // password = password.concat(specialList[Math.round(Math.random()*(specialList.length-1))]); // adds an special character to password to ensure at least one exists in password
      password = password.concat(specialList[randomNumber(specialList.length)]);
    }
    // checks if the user has accepted at least one of the criteria
    if (listOfCharacters.length != 0){
      break;
    }
    else{
      alert('Sorry! You have chosen zero of the four options. Please choose at least one.')
    }
  }
  
  // generates the password one character at a time, and for each character, randomly picking from the listOfCharacters
  var l = listOfCharacters.length;
  for (var i = password.length; i < n; i++){
    // password = password.concat(listOfCharacters[Math.round(Math.random()*(l-1))]);
    password = password.concat(listOfCharacters[randomNumber(l)]);
    console.log("password", password);
  }

  // runs the shuffle function to shuffle password one final time since we first added one of each characters that the user wanted at the beginning
  return shuffle(password);

}

//function to shuffle password - using the Durstenfeld shuffle algorithm
function shuffle(password){

  // convert the string to array for the shuffle to work
  var passwordArray = password.split("");
  console.log("before", passwordArray);

  for (var i = passwordArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = passwordArray[i];
    passwordArray[i] = passwordArray[j];
    passwordArray[j] = temp;
  }

  console.log("after", passwordArray);

  // return the shuffled password as a string using the join method
  return passwordArray.join("");
}

function randomNumber(stringLength){
  return Math.floor(Math.random()*(stringLength));
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

document.querySelector("textarea").onclick = function(){
  document.querySelector("textarea").select();
  document.execCommand('copy');
}