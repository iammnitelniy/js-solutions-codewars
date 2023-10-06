function findAverage(array) {
    // your code here
      if (array === null || array.length === 0) {
        return 0;}
    else {
    let total = 0
   for(let i = 0; i < array.length; i++)
     {
       total += array[i]
     }
    return total / array.length
      }
  }