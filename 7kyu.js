function squareSum(numbers){
    let total = 0;
      for (let i = 0; i < numbers.length; i++){
        total = total + Math.pow(numbers[i], 2)
      }
      return total
    }

    console.log(squareSum([1,2,3,4,5]))