'use strict';

// Complete this algo
function minJumps (arr){
  if (arr.length === 0){
    return 1
  }
  let counter = 0;
  let current = arr[0];
  if (current >= (arr.length) - 1){
    return 1;
  } else {
    let subArr = arr.slice(1, current + 1)
    current = arr.indexOf(Math.max(...subArr))
    counter++;
    arr.splice(0, current)
    return counter + minJumps(arr)
  }
}

module.exports = minJumps
