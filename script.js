// Assignment Code
//Step 1: Variables
const upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
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
  var xs = [];

  if(upper2.checked) {
      xs.push(getUppercase())
  }

  if(lower2.checked) {
    xs.push(getLowercase())
}

  if(number2.checked) {
    xs.push(getNumber())
}
  
  if(character2.checked) {
    xs.push(getCharacter())
}

return xs[Math.floor(Math.random() * xs.length)]

}

function writePassword() {
  const len = length2.value;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

    for(let i=0; i<len; i++) {
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