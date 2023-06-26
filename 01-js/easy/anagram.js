/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(s, t) {
  // removing all the blank space
  s=s.split(' ').join('');
  t=t.split(' ').join('');

  // do not need a difference between upper and lowercase
  s=s.toLowerCase();
  t=t.toLowerCase();  
 
  // after sorting they should be same   
  s=s.split('').sort().join('');
  t=t.split('').sort().join('');

  if(s==t){
    return true;
  }

  return false;
 
}

module.exports = isAnagram;
