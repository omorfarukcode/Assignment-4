// Problem ---- 1
function cubeNumber(number) {
  if (typeof number !== "number") {
    return "please provide a Number.";
  } else {
    let cube = 0;
    cube = number * number * number;
    return cube;
  }
}

//   Problem ---- 2
function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "please provide a string.";
  } else {
    if (string1.includes(string2) || string2.includes(string1)) {
      return true;
    }
    return false;
  }
}

// Problem ---- 3
function sortMaker(arr) {
  if (arr[0] < 0 || arr[1] < 0) {
    return "Invalid Input";
  } else if (!Array.isArray(arr)) {
    return "please provide array of number";
  } else {
    if (arr[0] === arr[1]) {
      return "equal";
    }
    const sortedArray = arr.sort((a, b) => b - a);
    return sortedArray;
  }
}

// Problem ---- 4
function findAddress(obj) {
  if (typeof obj !== "object") {
    return "please provide me an array of number";
  } else {
    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__";
    return street + "," + house + "," + society;
  }
}

// Problem ---- 5
function canPay(changeArray, totalDue) {
  if (changeArray.length === 0 || !Array.isArray(changeArray)) {
    return "please provide array of number(Not Empty)";
  } else {
    let totalAmount = 0;
    for (let i = 0; i < changeArray.length; i++) {
      let element = changeArray[i];
      totalAmount = totalAmount + element;
    }
    if (totalAmount >= totalDue) {
      return true;
    } else if (totalAmount < totalDue) {
      return false;
    }
  }
}
