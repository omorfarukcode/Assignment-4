function cubeNumber(number) {
  if (typeof number !== "number") {
    return "please provide a Number.";
  } else {
    let cube = 0;
    cube = number * number * number;
    return cube;
  }
}
const result = cubeNumber(4);
console.log(result);
