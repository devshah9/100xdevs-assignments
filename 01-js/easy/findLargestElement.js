/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let largeNumber = numbers[0];
  for (i = 0; i < numbers.length; i++) {
    if (largeNumber <= numbers[i]) {
      largeNumber = numbers[i];
    }
  }
  return largeNumber;
}

module.exports = findLargestElement;
