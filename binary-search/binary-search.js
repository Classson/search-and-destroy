'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	if(array.length === 1){
		if(array[0] === target){
			return true;
		} else {
			return false;
		}
	}
	let middleInd = parseInt(array.length / 2)
	let left = array.slice(0, middleInd)
	let right = array.slice(middleInd)
	if(array[middleInd] === target){
		return true
	}
	else if (array[middleInd] < target){
		if(right.length < 1){
			return false
		} else {
			return binarySearch(right, target)
		}
	}
	else{
		if(left.length < 1){
			return false
		} else {
			return binarySearch(left, target)
		}
	}

};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
