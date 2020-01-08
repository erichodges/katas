function isSubPalindrom(num) {
  const strNum = num.toString();
  return (
    num
      .split("")
      .reverse()
      .join() == strNum
  );
}

function palindrome(num, palindromes = []) {
  if (typeof num !== "number") return "Not valid";
  if (num < 0) return "Not valid";
  if (num < 10) return "No palindromes found";

  if (isSubPalindrom(num)) {
    palindromes.push(num);
  }

  // a place to store the palindromes (array)
  // a place to keep track of current palindromes
  // iterate over the digits of the palindrome

  return [...new Set(palindromes.sort((a, b) => a - b))];
}

console.log(palindrome("ACCDDCCA"), "Not valid");
console.log(palindrome("1551"), "Not valid");
console.log(palindrome(-4505), "Not valid");
console.log(palindrom(2), "No palindromes found");
console.log(palindrome(1551), [55, 1551]);
console.log(palindrome(221122), [11, 22, 2112, 221122]);
console.log(palindrome(10015885), [88, 1001, 5885]);
console.log(palindrome(13598), "No palindromesfound");
