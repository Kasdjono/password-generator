// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCase = ["!", "?", "@", "#", "$", "%", "^", "&", "*"];
var numberCase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Array used for randomly selecting the specified characters
var charSelection = [];

// Array used for storing the newly created password
var finalSelection = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  function generatePassword() {

    // Prompt the user to determine how many character are neede for the password
    var passLength = window.prompt("How many characters are needed for the passwrod (8-128)");
    console.log(passLength);

    // The numVerify will be used to make sure that the user inputs a number and not a string
    numVerify = isNaN(passLength);
    console.log(numVerify);

    // Verify that the password is entered correctly
    while (passLength < 8 || passLength > 128 || numVerify) {
      var passLength = window.prompt("Remember, the password must be (8-128)");
      console.log(passLength);

      numVerify = isNaN(passLength);
      console.log(numVerify);
    }


    /*  window ask the user what type of characters are needed and use resulting 
        boolean values to merge the character arrays to our final array that will 
        have values randomly selected from  */
    var charType = ["lower case", "upper case", "number case", "special case"];
    for (var i = 0; i < charType.length; i++) {

      var result
      result = window.confirm("Do you want to use " + charType[i] + " values ?");
      console.log(result);


      /* concatinate the selected character type arrays to the charSelection array, which will be used to
          to pull random characters from for creating the code */
      /* concatinate one random character from the selected character type into our finalSelection array
          and I do this to ensure that none of the character tpyes will be left out when the randome
          selection is performed on the charSelection array */
      if (charType[i] === "lower case" && result) {
        charSelection = charSelection.concat(lowerCase);
        console.log(charSelection);
        finalSelection = finalSelection.concat(lowerCase[Math.floor(Math.random() * lowerCase.length)]);
        console.log(finalSelection);

      } 
        else if (charType[i] === "upper case" && result) {
        charSelection = charSelection.concat(upperCase);
        console.log(charSelection);
        finalSelection = finalSelection.concat(upperCase[Math.floor(Math.random() * upperCase.length)]);
        console.log(finalSelection);

      }
        else if (charType[i] === "number case" && result) {
        charSelection = charSelection.concat(numberCase);
        console.log(charSelection);
        finalSelection = finalSelection.concat(numberCase[Math.floor(Math.random() * numberCase.length)]);
        console.log(finalSelection);
      }

        else if (charType[i] === "special case" && result) {
        charSelection = charSelection.concat(specialCase);
        console.log(charSelection);
        finalSelection = finalSelection.concat(specialCase[Math.floor(Math.random() * specialCase.length)]);
        console.log(finalSelection);
      }

        // makes sure that one of the character types have been selected
        else if (finalSelection.length === 0 && i === 3) {
        alert("Please select at least one of the characters for your password.");
        generatePassword();
      }

    }


    // This will create the password and include the garenteed characters
    for (var index = finalSelection.length ; index < (passLength); index++) {
      finalSelection = finalSelection.concat(charSelection[Math.floor(Math.random() * charSelection.length)]);
        console.log(finalSelection);
    }
    

    // converts the array into a string and then eliminate the spaces
    finalSelection = finalSelection.join("");
    return finalSelection;
    
  }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);