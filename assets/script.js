// Assignment Code
//Step 1: Variables
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var character = ['!', '?', '@', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>', '[', ']', '{', '}']

//Step 2: Query Selectors 
var password = document.querySelector('#password')
var length2 = document.querySelector('#length')
var upper2 = document.querySelector('#upper')
var lower2 = document.querySelector('#lower')
var number2 = document.querySelector('#number')
var character2 = document.querySelector('#symbol')
var generate = document.querySelector('#generate')


// step 3: Individual Functions
function getUppercase() {
  return upper[(Math.floor(Math.random() * upper.length))];
}

function getLowercase() {
  return lower[(Math.floor(Math.random() * lower.length))];
}

function getNumber() {
  return number[(Math.floor(Math.random() * number.length))];
}

function getCharacter() {
  return character[(Math.floor(Math.random() * character.length))];
}

//step 4: Bigger Function
function generatePassword() {
  //Empty array
  var pw = [];

  // .checked is boolean
  if(upper2.checked) {
      pw.push(getUppercase())
  }

  if(lower2.checked) {
    pw.push(getLowercase())
}

  if(number2.checked) {
    pw.push(getNumber())
}
  
  if(character2.checked) {
    pw.push(getCharacter())
}

 return pw[Math.floor(Math.random() * pw.length)]

}

function writePassword() {
  const len = length2.value;
  if (len < 8 || len > 128) {
    alert('Please enter a number greater than 8 and less than 128.')
    return 
  }

  if(!upper2.checked && !lower2.checked && !number2.checked && !character2.checked) {
    alert('Please choose atleast 1 criteria.')
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

    for(let i=0; i<len -1; i++) {
      const x= generatePassword();
      password += x;
    }

  passwordText.innerHTML = password;

}

//Step 5: Event Listener
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener('click', writePassword);

// Testing functions to make sure they work
console.log(getUppercase());
console.log(getLowercase());
console.log(getNumber());
console.log(getCharacter());