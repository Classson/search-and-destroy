'use strict';

// Complete this algo
// const binarySearch = (array, target) => {
// 	if(array.length === 1){
// 		if(array[0] === target){
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	}
// 	let middleInd = parseInt(array.length / 2)
// 	let left = array.slice(0, middleInd)
// 	let right = array.slice(middleInd)
// 	if(array[middleInd] === target){
// 		return true
// 	}
// 	else if (array[middleInd] < target){
// 		if(right.length < 1){
// 			return false
// 		} else {
// 			return binarySearch(right, target)
// 		}
// 	}
// 	else{
// 		if(left.length < 1){
// 			return false
// 		} else {
// 			return binarySearch(left, target)
// 		}
// 	}

// };
const binarySearch = (arr, target) => {
	let middles = [];
	console.log('function called')
	let middle = parseInt(arr.length / 2)
	middles.push(middle)
	while(arr[middle]){
		if(target === arr[middle]){
			return true;
		}
		if(target > arr[middle]){
			let newMid = parseInt((middle + arr.length)/2)
			if(middles.includes(newMid)){
				return false
			}else {
				middle = newMid;
				middles.push(middle)
			}
		}
		else{
			let newMid = parseInt(middle/2)
			if(middles.includes(newMid)){
				return false
			} else {
				middle = newMid
				middles.push(newMid)
			}
		}
	}
	return false;
}

console.log(binarySearch([-0.5, 0.03, 2.6, 3, 3.5, 3.777777, 5], 4))
/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
