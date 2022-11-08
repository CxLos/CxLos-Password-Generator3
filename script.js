// Assignment Code
//Step 1: Variables
const upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var character = ['!', '?', '@', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>']

//Step 2: Query Selectors 
var password2 = document.querySelector('password')
var length2 = document.querySelector('length')
var upper2 = document.querySelector('upper')
var lower2 = document.querySelector('lower')
var number2 = document.querySelector('number')
var character2 = document.querySelector('character')
var generate = document.querySelector('generate')

// step 3: Functions
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

//step 4 practice

function generateX() {
  var xs = [];

  if(upper2) {
      xs.push(getUppercase())
  }

  if(lower2) {
    xs.push(getLowercase())
}

  if(number2) {
    xs.push(getNumber())
}
  
  if(character2) {
    xs.push(getCharacter())
}

return xs[Math.floor(Math.random() * xs.length)]

}

function writePassword() {
  //var length = length2.value;
  var password = generateX();
  var passwordText = document.querySelector("#password");

    for(let i=0; i<length; i++) {
      const x= generateX();
      password += x;
    }

  passwordText.value = password;

}

/*
//Step: 4 Bigger Function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
*/
//Step 5: Event Listener
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener('click', writePassword);

// Other

//alert(getUppercase());
console.log(getUppercase());
console.log(getLowercase());
console.log(getNumber());
console.log(getCharacter());

getUppercase();
getLowercase();
getNumber();
getCharacter();

//from video
/*
function generatePassword() {
  console.log("Yay")

  return "Generated Password will go here";
}
*/

//Other Attempt
/*
const lengthEl = document.getElementById('length'); 
const upperEl = document.getElementById('upper'); 
const lowerEl = document.getElementById('lower'); 
const numberEl = document.getElementById('number'); 
const symbolEl = document.getElementById('symbol'); 
const generateEl = document.getElementById('generate'); 
const passwordEl = document.getElementById('password')

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_-+=';

function getLowercase () {
    return lowerLetters[Math.floor(math.random() * lowerLetters.length)];
}

function getUppercase () {  
    return upperLetters[Math.floor(math.random() * upperLetters.length)];
}

function getNumber () {
    return numbers[Math.floor(math.random() * numbers.length)];
}

function getSymbol () {
    return symbols[Math.floor(math.random() * symbols.length)];
}

alert(getNumber());


function writePassword() {
    const length = lengthEl.value;

    let password = '';

    for (let i = 0, i < length; i++) {
      const x = writePassword();
      password += x;
    }
      passwordEl.innerText = password
}

function writePassword() {
  const xs = [];
  if(upperEl.checked) {
    xs.push(getUppercase())
  }

  if(lowerEl.checked) {
    xs.push(getlowercase())  
  }

  if(numberEl.checked) {
    xs.push(getNumber())
  }

  if(symbolEl.checked) {
    xs.push(getSymbol())
  }

return xs[math.floor(math.random() * xs.length)];

}

generateEl.addEventListener('click', writePassword);
*/

//getUpper.charAt(0)

// getUpper.charAT(Math.floor(Math.random()* 26));