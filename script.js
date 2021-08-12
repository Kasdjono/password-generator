// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  function generatePassword() {

    // Prompt the user to determine how many character are neede for the password
    var passLength = prompt ("How many characters are needed for the passwrod (8-128)");
    console.log(passLength);

    if(passLength <= 128) {
      alert("You selected " + passLength + " characters.");
    }
    else {
      return undefined;
    }

    // Prompt the user to determine what characters are required
    var charType = ["lowercase", "uppercase", "numeric", "special"];
    for(i = 0; i < charType.length; i++) {

      var charSelect = prompt ("Does the password require " + charType[i] + "?  Type: yes or no");
      console.log(charSelect.toUpperCase());

        if(charSelect == "YES") {
          //charUsed[]
          alert("The password will require " + charType[i] + ".");
        }
        else if(charSelect == "NO") {
          alert("The password will not require " + charType[i] + ".");
        charType.splice(i,1);
        }
        else {
          return undefined;
        }

    }

  }

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
