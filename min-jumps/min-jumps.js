'use strict';

let counter = 0;
// Complete this algo
function minJumps (arr){
  let current = arr[0];
  if(arr[current] > arr.length){
    counter++;
    return counter
  } else {
    let subArr = arr.slice(0, arr[current])
    current = arr.indexOf(Math.max(...subArr))
    counter++;
    return minJumps(arr.splice(0, current))
  }
};

module.exports = minJumps
