function isPalindrome(word) {
  // Write your algorithm here
  var reg = /[\W_]/g; //the slash signifies a start of regular expression. 
  //backslash & W to match all alphanumeric values, g  for global
  var smallStr = word.toLowerCase().replace(reg, '');

  var reversed = smallStr.split('').reverse().join('');
  
  if(reversed === smallStr) return true;

    return false;
}
isPalindrome('racecar');
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log('Expecting: true');
  console.log('=>', isPalindrome('abba'));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log('Expecting: true');
  console.log('=>', isPalindrome('a'));
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log('Expecting: false');
  console.log('ab', isPalindrome('ab'));
}

module.exports = isPalindrome;