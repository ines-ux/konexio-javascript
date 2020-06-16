function powerFuncIter(num, power) {
	// Créer une variable pour stocker le résultat de power function
	var result = 1;

	// Multiplier le nombre par lui-même jusqu'à obtenir le nombre demandé càd power
	for (var i = 0; i < power; i++) {
		// console.log('Inès');
		result = result * num;
		// console.log(result);
	}

	// retourner le résultat
	return result;
}

console.log(powerFuncIter(3, 3));
console.log(powerFuncIter(2, 4));
