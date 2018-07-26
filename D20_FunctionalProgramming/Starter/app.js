function mapForEach(arr, fn) {

	var newArr = [];
	for (var i=0; i < arr.length; i++) {
		newArr.push(
			fn(arr[i])
			)
	};
	return newArr;
}

var arr1 = [1,2,3];

console.log(arr1)

var arr2 = mapForEach(arr1, function(item) {
	return item * 2;

});



var arr3 = mapForEach(arr1, function(item) {
	return item > 2;

});

console.log(arr2, arr3);




//function expression that has a limiter to check against the item
var checkPastLimit = function(limiter, item) {
	return item > limiter;
}

// var checkBound = function(limiter) {
// 	checkPastLimit.bind(this, limiter); 
// }
//copy of checkPastLimit function with 1 binded to limiter
// var arr4 = mapForEach(arr, checkBound(1));

// console.log(arr4);

//really nice function - solution to not have to use bind over and over
var checkPastLimiteSimplified = function(limiter) {
	return function(limiter, item) {
		return item > limiter;
	}.bind(this, limiter)
};

var arr5 = mapForEach(arr1, checkPastLimiteSimplified(2));

console.log(arr5);