// Assignment code here
var generateBtn = document.querySelector("#generate");
let passwordEl = document.querySelector("#password");
var button = document.getElementById('generate');

const lowerCaseLetter = ['a', 'b', 'c','d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numCharacter = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialCharacter = ['!', '#', '$', '%', '&', '*', '+', '-', '='];
const useLowerCase = window.confirm("Would you like to use lower case letters?");
const useUpperCase = window.confirm ("Would you like to use upper case letters?");
const useSpecialCharacter = window.confirm("Would you like to use special characters?");
const useNumbers = window.confirm("Would you like to use numeric characters?");
const passwordLength = window.prompt("Enter password length (between 8-128 characters");

let functionList = [];
if(useLowerCase){
  functionList.push(getLowerCaseLetter);
}
if(useUpperCase){
  functionList.push(getUpperCaseLetter);
}
if(useSpecialCharacter){
  functionList.push(useSpecialCharacter);
}
if(useNumbers){
functionList.push(getNumCharacter);
};

function getRandomNumber(max) {
  return (Math.floor(Math.random() * max))
};

function getLowerCaseLetter(){
  const tmp = getRandomNumber(lowerCaseLetter.length);
  return lowerCaseLetter[tmp];
};

function getUpperCaseLetter(){
  const tmp = getRandomNumber(upperCaseLetter.length);
  return upperCaseLetter[tmp];
};

function getSpecialCharacter(){
  const tmp = getRandomNumber(specialCharacter.length);
};

function getNumCharacter(){
  const tmp = getRandomNumber(numCharacter.length);
};

function getPasswordCharacter(){
  const tmp = getRandomNumber(functionList.length);
  return functionList[tmp]();
};

let finalPassword = '';
for(let i = 0; i< passwordLength; i++){
const char = getPasswordCharacter();
finalPassword = finalPassword+char;
}
window.alert(finalPassword)

// window.prompt = prompt("Enter password length (between 8-128 characters");
//   userPasswordLength = parseInt(userPasswordLength)
// console.log()

// if (userPasswordLength <8 || userPassLength > 128) {
//    alert("Please select a valid password length (between 8-128 characters)")
//    return promptPasswordLength();
// }
//  else {
//    return userPasswordLength;
// };



// for (let i = 0; i < passwordLength; i++) {
//   if (lowerCaseLetterConfirm) {
//     randomLowerCase = getRandom(lowerCaseLetter.length);
// }
// }

// function generatePassword() {
//   return "test";
// }
// // Get references to the #generate element
// let generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   let password = generatePassword();
//   let passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
