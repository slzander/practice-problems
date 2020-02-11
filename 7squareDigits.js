// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    let numberString = Array.from(num.toString())
    for(i = 0; i < numberString.length; i++){
      numberString.splice(i, 1, Math.pow(parseInt(numberString[i]), 2))
      console.log(numberString)
    }
    return parseInt(numberString.join(''))
  }