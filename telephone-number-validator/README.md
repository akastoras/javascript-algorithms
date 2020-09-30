# ceasars-cipher

## Concept
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

  555-555-5555
  (555)555-5555
  (555) 555-5555
  555 555 5555
  5555555555
  1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

## Solution
For this problem we will create a list of regexes to check if a number has one of the given forms. Notice that many forms coresponde to one regex.

## Methods
All methods for this problem are explained at the ceasars-cipher project, except reduce() method, which is too complicated to explain shortly if you want to learn more [click here] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).
