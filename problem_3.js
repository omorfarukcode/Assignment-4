function sortMaker(arr) {
  if (!Array.isArray(arr)) {
    return "please provide array of number";
  } else if (arr[0] < 0 || arr[1] < 0) {
    return "Invalid Input";
  } else {
    if (arr[0] === arr[1]) {
      return "equal";
    } else {
      const sortedArray = arr.sort((a, b) => b - a);
      return sortedArray;
    }
  }
}
// const arry = [-1, 1] ;
// const result = sortMaker(arry);
// console.log(result);
