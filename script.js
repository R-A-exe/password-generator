// Assignment Code
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialchar = ['`', '~', '!', '@', '#', '$', "%", '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', ',', '.', '/', '<', '>', '?'];
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var choiceList = [];
  var pass;
  var validateCrit = [true, true, true, true];

  while (true) {
    var size = prompt("To defint the size of the password you would like to generate, enter a number between 8 and 128 ");
    if (!isNaN(size) && size < 128 && size > 8) {
      console.log("size is: " + size)
      break;
    }
  }

  while (true) {

    if (confirm("Would you like to include lowercase letters?")) {
      choiceList = choiceList.concat(lowercase);
      validateCrit[0] = false;
    }
    if (confirm("Would you like to include uppercase letters?")) {
      choiceList = choiceList.concat(uppercase);
      validateCrit[1] = false;
    }
    if (confirm("Would you like to include numbers?")) {
      choiceList = choiceList.concat(numeric);
      validateCrit[2] = false;
    }
    if (confirm("Would you like to include special characters?")) {
      choiceList = choiceList.concat(specialchar);
      validateCrit[3] = false;
    }
    if (choiceList.length > 0) {
      break;
    }
    alert("Please choose at lease one type of characters.")
  }

  while (true) {
    pass ="";
    for (i = 0; i < size; i++) {
      pass += choiceList[Math.floor(Math.random() * choiceList.length)];
    }
    console.log("Generated Password is " + pass);

    if (validate(pass, validateCrit[0], validateCrit[1], validateCrit[2], validateCrit[3])) {
      break;
    }
  }

  console.log("Password is: " + pass);
  return pass;

}

function validate (pass, lower, upper, num, spec){

  for(i=0 ; i<pass.length; i++){
    if(!lower && lowercase.includes(pass.charAt(i))){
      lower = true;
    }
    if(!upper && uppercase.includes(pass.charAt(i))){
      upper = true;
    }
    if(!num && numeric.includes(pass.charAt(i))){
      num = true;
    }
    if(!spec && specialchar.includes(pass.charAt(i))){
      spec = true;
    }
    if(lower && upper && num && spec){
      return true;
    }
  }
  console.log(lower + ", " + upper + ", " + num + ", " + spec)
  return false;
}