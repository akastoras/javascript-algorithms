# ceasars-cipher

## Concept
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the [ROT13](https://en.wikipedia.org/wiki/ROT13) cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a [ROT13](https://en.wikipedia.org/wiki/ROT13) encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

## Solution
In this solution, in order to simplify the code, i split the main problem to smaller ones. I will create a function to decode a single character, and then use it to decode the main string.
  * First we have to write this function. Keep in mind that there are 2 cases:
  1. The character's ascii value plus 13 is less than Z's ascii value so we just return the character which's ascii value is the first characters ascii value plus 13,
  2. else we need to compute the new ascii value taking in mind how rot13 works
  * Then we need to parse the starting string and decode each alphanumeric character
   
## Methods used
  * char.charCodeAt() -> returns the characters ascii value
  * String.fromCharCode(value) -> returns the character with the given ascii value
  * str.split("") -> splits a string into an array of substrings, and returns the new array
  * arr.join("") -> creates a string from an array of characters
  * list.length -> returns a list's length
  
  ### RegEx
   A regular expression (RegEx) is a sequence of characters that define a search pattern. The method regEx.test(string) which we use, checks if the defined regEx can be found in the given string. This way we simplify searching. 
   If you aren't familiar with regular expressions i suggest you to check [freeCodeCamp.org's](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/) section on them. You can find it inside the course "Javascript Algorithm's and data structures".
