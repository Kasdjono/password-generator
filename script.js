// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCase = ["!", "?", "@", "#", "$", "%", "^", "&", "*"];
var numberCase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var charSelection = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  function generatePassword() {

    // Prompt the user to determine how many character are neede for the password
    var passLength = window.prompt("How many characters are needed for the passwrod (8-128)");
    console.log(passLength);

    while (passLength < 8 || passLength > 128) {
      var passLength = window.prompt("Remember, the password must be (8-128)");
      console.log(passLength);
    }

    /*window ask the user what type of characters are needed and use resulting 
      boolean values to merge the character arrays to our final array that will 
      have values randomly selected from */

    var charType = ["lower case", "upper case", "number case", "specialc ase"];
    for (var i = 0; i < charType.length; i++) {

      var result
      result = window.confirm("Do you want to use " + charType[i] + " values ?");
      console.log(result);

      // concatinate  the  arrays together in order to create the final array
      if (charType[i]=="lower case" && result) {
        charSelection = [].concat(lowerCase);
        console.log(charSelection);

      } else if (charType[i]=="upper case" && result) {
        charSelection = charSelection.concat(upperCase);
        console.log(charSelection);
      }

      else if (charType[i]=="number case" && result) {
        charSelection = charSelection.concat(numberCase);
        console.log(charSelection);
      }

      else if (charType[i]=="specialc ase" && result) {
        charSelection = charSelection.concat(specialCase);
        console.log(charSelection);
      }

    }
   
    // concatinate 1 character from selected  into the garenteed array
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









// if (window.confirm("Do you want to use " + charType[i] + " ?"));{
//   console.log(variable);
// }

// var charType = ["lowercase", "uppercase", "numeric", "special"];
// for (var i = 0; i < charType.length; i++) {

//   var charSelect = window.prompt("Does the password require " + charType[i] + "?  Type: yes or no");
//   console.log(charSelect);
//   charSelect = charSelect.toUpperCase();

//   if (charSelect === "YES") {
//     //charUsed[]
//     window.alert("The password will require " + charType[i] + ".");
//   }
//   else if (charSelect === "NO") {
//     window.alert("The password will not require " + charType[i] + ".");
//     charType.splice(i, 1);
//   }
//   else {
//     return undefined;
//   }











