const AMOUNTS = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.1,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
}
  
function checkCashRegister(price, cash, cid) {
  var changeValue = cash - price
  var cidValue = cid.reduce((sum, item) => Math.round((sum + item[1]) * 100) / 100, 0.0)
  if (cidValue === changeValue) {
    return {
      status: "CLOSED",
      change: cid
    }
  } else {
    cid = cid.reverse()

    var change = cid.reduce((change, element) => {
      if (AMOUNTS[element[0]] > changeValue || element[1] === 0) {
        return change
      }
      // else
      change.push([element[0], 0])
      while (changeValue >= AMOUNTS[element[0]] && element[1]) {
        change[change.length - 1][1] = Math.round((change[change.length - 1][1] + AMOUNTS[element[0]]) * 100) / 100
        changeValue = Math.round((changeValue - AMOUNTS[element[0]]) * 100) / 100
        element[1] = Math.round((element[1] - AMOUNTS[element[0]]) * 100) / 100
      }
      console.log(change, changeValue)
      return change
    }, [])

    if (changeValue > 0) {
      return {
        status: "INSUFFICIENT_FUNDS",
        change: []
      }
    } else {
      return {
        status: "OPEN",
        change: change
      }
    }
  }
}
