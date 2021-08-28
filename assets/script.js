// Assignment code here
var lowerCaseLetter = ['a', 'b', 'c','d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericCharacter = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacter = ['!', '#', '$', '%', '&', '*', '+', '-', '='];

function getRandom(max) {
    return (Math.floor(Math.random() * max))
};

const promptPasswordLength = function(){
  const inputPasswordLength = prompt("Enter password length (between 8-128 characters")


  if (userPasswordLength <8 || userPassLength > 128) {
    alert("Please select a valid password length (between 8-128 characters)")
    return promptPasswordLength();
  }
  else {
    return userPasswordLength;
  }
};

passwordLength = 
var lowerCaseLetter = window.confirm("Would you like to use lower case letters?");
var upperCaseLetter = window.confirm("Would you like to use upper case letters?");
var numericCharacter = window.confirm('Would you like to use numbers?');
var specialCharacter = window.confirm("Would you like to use special characters?");


for (let i = 0; i < passwordLength; i++) {
  if (lowerCaseLetterConfirm) {
    randomLowerCase = getRandom(upperCaseLetter.length);
};

function generatePassword() {
  
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
