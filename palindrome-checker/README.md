# palndrome-checker

### Concept:
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

###### Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

### Solution:
For starters you'll have to clear the string from all the non-alphanumerical characters, so:
  * Create a function to identify all non-alphanumerical characters
  * Create a function that parses a list of characters and using the first function deletes all non-alphanumerical characters
  * In our main function, we have to call the second function we wrote, and pass as arguments our string (as lowercase), as a list of characters.

### Methods used:
  * list.splice(index, 1) -> removes a list's item by index
  * str.toLowerCase() -> converts a string to lowercase letters
  * str.split("") -> splits a string into an array of substrings, and returns the new array
  * list.length -> returns a list's length
