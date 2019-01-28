'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  let loopVals = {};
  let currentNode = linkedlist.head;
  while(currentNode){
    if(loopVals[currentNode.value]){
      return true
    } else {
      loopVals[currentNode.value] = 1;
      if(!currentNode.next){
        return false
      } else {
        currentNode = currentNode.next
      }
    }
  }
};

// const isLoop = (linkedlist) => {
//   if(linkedlist.tail.next){
//     return true
//   } else {
//     return false
//   }
// }


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
