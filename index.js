/*

let palindromeNonPalindrome = "Abc Mom Hello Madam Dad xyz";
function getLongestPalindrome(palindromeNonPalindrome) {
// return longest palindrome along with its length
}

*/

function getLongestPalindrome(palindromeNonPalindrome) {
  const words = palindromeNonPalindrome.split(" ");

  // console.log(words);

  const palindromes = words.filter((word) => {
    //console.log(word.split("").reverse().join("").toLowerCase());
    if (
      word.split("").reverse().join("").toLowerCase() === word.toLowerCase()
    ) {
      // console.log(word.split("").reverse().join(""));
      return true;
    }
  });

  console.log(palindromes);

  const large = palindromes.sort((a, b) => {
    return b.length - a.length;
  })[0];
  console.log(large);
}

palindromeNonPalindrome = "Abc Mom Hello Madam Dad xyz";
getLongestPalindrome(palindromeNonPalindrome);

/*
let value1 = "hi";

let string = `hello ${value1}`;

function a(name, args = 10) {}

const obj = { name, ...person };
*/

// 1. weak map and map
// 2. object literal and template literal
// 3. what kind of data binding we use in react
// 4. how to create custom hooks in react
// 5. deep copy and shallow copy.
// 6. ES6
// 7. immutable js
// 8. prototype in js

//chrome://flags/ -> search for dark mode and enable
