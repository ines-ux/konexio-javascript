var arr = [ 1, 2, 3, 4 ];
var arr2 = arr.map(function isEven(x) {
	if (x % 2 == 0) {
		return true;
	} else {
		return false;
	}
});
console.log(arr2);
