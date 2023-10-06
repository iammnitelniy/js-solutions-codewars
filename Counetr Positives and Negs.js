function countPositivesSumNegatives(input) {
    // your code here
    let arr = []
    let count = 0
    let total = 0
    for(let i = 0; i < input.length; i++)
      {
        if(input[i] > 0) {count ++}
        else if(input[i] <= 0) {
          total += input[i]
  
        }
      }
    arr.push(count, total)
    return arr
  }