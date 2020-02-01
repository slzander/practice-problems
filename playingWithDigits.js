
function digPow(n, p){
    let calculation = 0
    for(i = 0; i < n.toString().length; i++){
        calculation = calculation + Math.pow(
          n.toString().substring(i, i + 1), i + p
        )
    }
    if(calculation % n === 0){
      return calculation / n
    } else {
      return -1
    }
  }