function squareRoot(num) {
	var i = 1;

	if (i * i == num) {
		return i;
	} else {
		return 0;
	}
	for (var i = 0; i < num; i++) {
		console.log(i);
	}
}

console.log(squareRoot(25));
console.log(squareRoot(32));
