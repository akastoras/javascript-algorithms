const FIRST = "A".charCodeAt()
const LAST = "Z".charCodeAt()
const REGEX = /^\w$/

function charRot13(char) {
  let asciiVal = char.charCodeAt()

  if (asciiVal + 13 <= LAST) return String.fromCharCode(asciiVal + 13)
  return String.fromCharCode(FIRST - LAST + asciiVal + 12)
}

function rot13(str) {
  let arr = str.split("")
  for (let i = 0; i < arr.length; i++) {
    if (REGEX.test(arr[i])) {
      arr[i] = charRot13(arr[i])
    }
  }
  str = arr.join("")
  return str;
}
