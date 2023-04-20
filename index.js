// Algorithm: Palindrome Check with Counters and Loops

// 1. Accept the input word as a string.
// 2. Convert the input word to lowercase to make the comparison case-insensitive.
// 3. Initialize two counters, one pointing to the first character of the word called "start", and the other pointing to the last character of the word called "end".
// 4. Loop while "start" is less than or equal to "end":
//    a. Compare the characters at "start" and "end".
//    b. If they are not equal, return false as the word is not a palindrome.
//    c. Increment "start" by 1 and decrement "end" by 1.
// 5. If the loop completes without finding any differences, return true as the word is a palindrome.

// Palindrome Check with Counters and Loops
function isPalindrome(word) {
  word = word.toLowerCase();
  let start = 0;
  let end = word.length - 1;
  while (start <= end) {
    if (word[start] !== word[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

// Example usage
const word1 = "gag";
console.log(word1 + " is a palindrome? " + isPalindrome(word1)); // true

const word2 = "kayak";
console.log(word2 + " is a palindrome? " + isPalindrome(word2)); // true

const word3 = "php";
console.log(word3 + " is a palindrome? " + isPalindrome(word3)); // true

const word4 = "radar";
console.log(word4 + " is a palindrome? " + isPalindrome(word4)); // true

const word5 = "hello";
console.log(word5 + " is a palindrome? " + isPalindrome(word5)); // false
