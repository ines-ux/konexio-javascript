function firstFactorial(num) {
	var result = 1;
	for (i = 1; i <= num; i++) {
		result = result * i;
	}
	return result;
}
console.log(firstFactorial(4));
console.log(firstFactorial(8));
