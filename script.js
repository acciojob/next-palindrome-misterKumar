function nextPalindrome(num) {
  //your JS code here.
	// Helper function to check if a number is palindrome
  function isPalindrome(n) {
    return n.toString() === n.toString().split('').reverse().join('');
  }

  // Increment the input number until finding the next palindrome
  while (true) {
    num++;
    if (isPalindrome(num)) {
      return num;
    }
  }
}

const input = prompt("Enter a palindrome number");
alert(nextPalindrome(input));

