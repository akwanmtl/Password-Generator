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

  // The while loop will break when the user has chosen at least one of the 4 options
  while (true) {
    
    var lowerChar = confirm("Would you like to use lowercase characters in your password?");
    if (lowerChar) {
      listOfCharacters = listOfCharacters.concat(lowerCaseList);
    }

    var upperChar = confirm("Would you like to use uppercase characters in your password?");
    if (upperChar) {
      listOfCharacters = listOfCharacters.concat(upperCaseList);
    }

    var numberChar = confirm("Would you like to use number characters in your password?");
    if (numberChar) {
      listOfCharacters = listOfCharacters.concat(numberList);
    }

    var specialChar = confirm("Would you like to use special characters in your password?");
    if (specialChar) {
      listOfCharacters = listOfCharacters.concat(specialList);
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
 
  var password = "";
  for (var i = 0; i < n; i++){
    password = password.concat(listOfCharacters[Math.round(Math.random()*l)]);
  }
  return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
