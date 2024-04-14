//*write a function to determine wheather a given string is a palindrome or not .
//*a palindrome is a word, phrase, number, or other sequence of characters that reads the same
//* forward and backwards, ignoring spaces , punctuation, and capitalization

const isPalindrome = (str) => {
  // Function to check if a string is a palindrome
  const isPalindromeString = (s) => {
    s = s.toLowerCase().replace(/\W/g, "");
    let reverseStr = s.split("").reverse().join("");
    return s === reverseStr;
  };

  // Iterate over each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // Check if the character by itself is a palindrome
    if (!isPalindromeString(char)) {
      return false; // If any character is not a palindrome, return false
    }
  }
  // If all characters are palindromes, return true
  return true;
};

const data = "A, life is lie without his eye";
console.log("Is each character a palindrome?", isPalindrome(data));
