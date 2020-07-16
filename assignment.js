// FEETTOMILE PROBLEM
function feetToMile(feet) {
  if (feet <= 0) {
    return 'length cannot be negative or zero';
  } else {
    return feet / 5280;
  }
}

// WOODCALCULATOR PROBLEM
function woodCalculator(numOfChair, numOfTable, numOfBed) {
  if (numOfChair < 0 || numOfTable < 0 || numOfBed < 0) {
    return 'given values cannot be negative';
  } else {
    return 1 * numOfChair + 3 * numOfTable + 5 * numOfBed;
  }
}

// BRICKCALCULATOR PROBLEM
function brickCalculator(floorNum) {
  if (floorNum <= 0) {
    return 'floor number cannot be negative or zero';
  }
  if (floorNum <= 10) {
    return floorNum * 15 * 1000;
  } else if (floorNum > 10 && floorNum <= 20) {
    return 10 * 15 * 1000 + (floorNum - 10) * 12 * 1000;
  } else {
    return 10 * 15 * 1000 + 10 * 12 * 1000 + (floorNum - 20) * 10 * 1000;
  }
}

// TINYFRIEND PROBLEM
function tinyFriend(arr) {
  var min = arr[0];
  if (!arr.length) {
    return 'array cannot be empty';
  } else {
    for (var i = 1; i < arr.length; i++) {
      if (arr[i].length < min.length) {
        min = arr[i];
      }
    }

    return min;
  }
}

//FOR TESTING PURPOSE
console.log(feetToMile(1000));
console.log(woodCalculator(2, 2, 2));
console.log(brickCalculator(0));
console.log(tinyFriend(['aadf', 'aaa', 'ab', 'aaacc', 'abcdef']));
