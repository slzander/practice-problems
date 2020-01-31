// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// array_diff([1,2,2,2,3],[2]) == [1,3]

function array_diff(a, b) {
    for (let i = 0; i < b.length; i++){
      for(let j = 0; j < a.length; j++){
        if(a[j] === b[i]){
          a.splice(j, 1)
          j = j-1
        }
      }
    }
    return a
}

function array_diff(a, b) {
    // if(a.length == 0) return [];
    // if(b.length == 0) return a;
    return a.filter((i)=>(!b.includes(i)));
}