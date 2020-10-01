const ROMANNUMERALS = {
  "1": "I",
  "5": "V",
  "10": "X",
  "50": "L",
  "100": "C",
  "500": "D",
  "1000": "M"
}

var converters = [
  function(num) {
    if (num =="9") {
      return ROMANNUMERALS[1]
    } else if (num >= 5) {
      let str = ROMANNUMERALS[5]

      for (let i = 5; i < num; i++) {
        str += ROMANNUMERALS[1]
      }
      return str
    } else if (num == "4") {
      return "IV"
    } else {
      let str = ""

      for (let i = 0; i < num; i++) {
        str += ROMANNUMERALS[1]
      }
      return str
    }
  },
  function(num) {
    if (num =="9") {
      return ROMANNUMERALS[10]
    } else if (num >= 5) {
      let str = ROMANNUMERALS[50]

      for (let i = 5; i < num; i++) {
        str += ROMANNUMERALS[10]
      }
      return str
    } else if (num == "4") {
      return "XL"
    } else {
      let str = ""

      for (let i = 0; i < num; i++) {
        str += ROMANNUMERALS[10]
      }
      return str
    }
  },
  function(num) {
    if (num =="9") {
      return ROMANNUMERALS[100]
    } else if (num >= 5) {
      let str = ROMANNUMERALS[500]

      for (let i = 5; i < num; i++) {
        str += ROMANNUMERALS[100]
      }
      return str
    } else if (num == "4") {
      return "CD"
    } else {
      let str = ""

      for (let i = 0; i < num; i++) {
        str += ROMANNUMERALS[100]
      }
      return str
    }
  },
  function(num) {
    let str = ""

    for (let i = 0; i < num; i++) {
      str += ROMANNUMERALS[1000]
    }
    return str
  }
]

function convertToRoman(num) {
  var str = num.toString().split("")

  num = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "9") {
      let cluster = []
      cluster.push(converters[str.length - i](1))
      cluster.unshift(converters[str.length - i - 1](9))
      num = num.concat(cluster)
    } else {
      num.push(converters[str.length - i - 1](str[i]))
    }
  }

  return num.join("")
}
