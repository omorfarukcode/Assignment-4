function cubeNumber(number) {
  if (typeof number !== "number" || number < 0) {
    return "please provide a Number (Positive).";
  } else {
    let cube;
    cube = number * number * number;
    return cube;
  }
}

// const result = cubeNumber(3);
// console.log(result);
