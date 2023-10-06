function elevator(left, right, call) {
    let righter = Math.abs(call - right);
    let lefter = Math.abs(call - left);
    if (righter > lefter) {
      return "left"
    }
    else {
      return "right"
    }
  }
  console.log(elevator(1,0,1))