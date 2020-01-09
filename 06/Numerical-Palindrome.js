function isSubPalindrome(num) {
  const strNum = num.toString();
  return (
    strNum
      .split("")
      .reverse()
      .join() == strNum
  );
}

function palindrome(num, palindromes = []) {
  if (typeof num !== "number") return "Not valid";
  if (num < 0) return "Not valid";
  if (num < 10) return "No palindromes found";

  if (isSubPalindrome(num)) {
    palindromes.push(num);
  }

  palindrome(+num.toString().slice(1), palindromes);
  palindrome(+num.toString().slice(0, -1), palindromes);

  // a place to store the palindromes (array)
  // a place to keep track of current palindromes
  // iterate over the digits of the palindrome

  return [...new Set(palindromes.sort((a, b) => a - b))];
}

console.log(palindrome("ACCDDCCA"), "Not valid");
console.log(palindrome("1551"), "Not valid");
console.log(palindrome(-4505), "Not valid");
console.log(palindrome(2), "No palindromes found");
console.log(palindrome(1551), [55, 1551]);
console.log(palindrome(221122), [11, 22, 2112, 221122]);
console.log(palindrome(10015885), [88, 1001, 5885]);
console.log(palindrome(13598), "No palindromes found");
