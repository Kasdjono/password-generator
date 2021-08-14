// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCase = ["!", "?", "@", "#", "$", "%", "^", "&", "*"];
var numberCase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var charSelection = [];
var finalSelection = [];
var finalString = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  function generatePassword() {

    // Prompt the user to determine how many character are neede for the password
    var passLength = window.prompt("How many characters are needed for the passwrod (8-128)");
    console.log(passLength);
    passLength = parseInt(passLength);
    console.log(passLength);

    while (passLength < 8 || passLength > 128) {
      var passLength = window.prompt("Remember, the password must be (8-128)");
      console.log(passLength);
    }


    /*  window ask the user what type of characters are needed and use resulting 
        boolean values to merge the character arrays to our final array that will 
        have values randomly selected from  */
    var charType = ["lower case", "upper case", "number case", "specialc case"];
    for (var i = 0; i < charType.length; i++) {

      var result
      result = window.confirm("Do you want to use " + charType[i] + " values ?");
      console.log(result);

      // concatinate  the  arrays together in order to create the final array
      if (charType[i] == "lower case" && result) {
        charSelection = [].concat(lowerCase);
        console.log(charSelection);
        finalSelection = [].concat(lowerCase[Math.floor(Math.random() * lowerCase.length)]);
        console.log(finalSelection);
      } 
        else if (charType[i] == "upper case" && result) {
        charSelection = charSelection.concat(upperCase);
        console.log(charSelection);
        finalSelection = finalSelection.concat(upperCase[Math.floor(Math.random() * upperCase.length)]);
        console.log(finalSelection);

      }
        else if (charType[i] == "number case" && result) {
        charSelection = charSelection.concat(numberCase);
        console.log(charSelection);
        finalSelection = finalSelection.concat(numberCase[Math.floor(Math.random() * numberCase.length)]);
        console.log(finalSelection);
      }

        else if (charType[i] == "specialc case" && result) {
        charSelection = charSelection.concat(specialCase);
        console.log(charSelection);
        finalSelection = finalSelection.concat(specialCase[Math.floor(Math.random() * specialCase.length)]);
        console.log(finalSelection);
      }

    }

    // This will create the password and include the garenteed characters
    for (var index = finalSelection.length ; index < (passLength); index++) {
      finalSelection = finalSelection.concat(charSelection[Math.floor(Math.random() * charSelection.length)]);
        console.log(finalSelection);
    }
    
    finalSelection = finalSelection.join("");
    return finalSelection
    
  }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);