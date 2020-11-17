var validFormats = [
  /^(1*)\s{0,1}\d{3}-\d{3}-\d{4}$/,
  /^(1*)\s{0,1}\(\d{3}\)\s{0,1}\d{3}-\d{4}$/,
  /^(1*)\s{0,1}\d{10}$/,
  /^(1*)\s{0,1}\d{3}\s\d{3}\s\d{4}$/
]

function telephoneCheck(str) {
  return validFormats.reduce((isValid, format) => {
    if (format.test(str)) 
      return true;
    else
      return isValid;
  }, false);
}
