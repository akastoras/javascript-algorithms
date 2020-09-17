function isAlphanumeric(character) {
  if (character >= "a" && character <= "z") return true
  if (character >= "A" && character <= "Z") return true
  if (character >= "0" && character <= "9") return true
  return false
}

function removeNonAlphanumeric(list) {
  for (let i = 0; i < list.length; i++) {
    if ( !isAlphanumeric(list[i]) ) {
      list.splice(i-- , 1)
    }
  }
  return list
}

function palindrome(str) {
  let list = removeNonAlphanumeric(str.toLowerCase().split(""))

  for (let i = 0; i < list.length; i++) {
    if (list[i] !== list[list.length - i - 1]) return false
  }
  return true
}
