function grow(x){
    let mult = x[0]
    for(let i = 1; i < x.length; i++) {
      mult *= x[i]
      
    }
    return mult
  }