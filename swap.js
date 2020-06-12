// à refaire

function swap(first, second) {
	var third = first;
	first = second;
	second = third;

	return [ first, second ];
}
console.log(swap(25, 30));
console.log(swap(123, 456));
