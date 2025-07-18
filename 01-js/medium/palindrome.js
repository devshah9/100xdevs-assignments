/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let reversedStr = str.split('').reverse().join('');
  return str.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase() === reversedStr.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase();
}

module.exports = isPalindrome;
