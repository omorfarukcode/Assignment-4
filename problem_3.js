function sortMaker(arr) {
 if (arr[0] < 0 || arr[1] < 0) {
    return "Invalid Input";
  }else  if (!Array.isArray(arr)) {
    return "please provide array of number";
  } 
  else {
    if (arr[0] === arr[1]) {
      return "equal";
    }
    const sortedArray = arr.sort((a, b) => b - a);
      return sortedArray;  
  }
}

const arry = [4,-2] ;
const result = sortMaker(arry);
console.log(result);


// else  if (!Array.isArray(arr)) {
//   return "please provide array of number";
// } 