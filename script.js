// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

// Function to prompt user for password options
function getPasswordOptions () {

  var infPassword = prompt (
    'Enter the password length (between 8 and 128 characters):'
  );
  var length = parseInt (infPassword); // password length (between 8 and 128 characters)
  var includeSpecial = confirm ('Special character?');
  var includeNumeric = confirm ('Numeric character?');
  var includeLowercase = confirm ('Lowercase character?');
  var includeUppercase = confirm ('Uppercase character?');

  var passwordOptions = {
    length: length,
    includeSpecial: includeSpecial,
    includeNumeric: includeNumeric,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
  };

 

  if (isNaN (length) || length < 8 || length > 128) {
    alert ('Invalid password length. Please enter a number between 8 and 128.');
    return null; // invalid return
  }
  return passwordOptions;
  }


// Function for getting a random element from an array
  function getRandom (arr) {
    if (!Array.isArray (arr) || arr.length === 0) {
      console.error ('Invalid input array in getRandom.');
      return null;
    }
  var getRandomOpt= Math.random()
  var index = getRandomOpt*arr.length
  var roundedNumber = Math.floor(index)
  return arr[roundedNumber]
  }

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  if (!options) return;

  var passwordEls = [];

  if (options.includeSpecial) {
    passwordEls = passwordEls.concat (specialCharacters);
  }
  if (options.includeNumeric) {
    passwordEls = passwordEls.concat (numericCharacters);
  }
  if (options.includeLowercase) {
    passwordEls = passwordEls.concat (lowerCasedCharacters);
  }
  if (options.includeUppercase) {
    passwordEls = passwordEls.concat (upperCasedCharacters);
  }

  var password = '';
  for (var i = 0; i < options.length; i++) {
    password += getRandom(passwordEls);
  }

  return password;
}
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');;

// Write password to the #password input
function writePassword () {
  var password = generatePassword();
  var passwordText = document.querySelector ('#password');

  if (password) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
