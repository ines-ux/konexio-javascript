function SimpleAdding(num) {
	// console.log(num);
	// creer une variable qui va me stoker la somme
	var sum = 0;

	// Je vais utiliser une boucle pour aditionner chaque tour la valeur de i a la somme.
	for (var i = 0; i <= num; i++) {
		sum = sum + i;
		// console.log(sum);
	}

	// console.log('la somme : ', sum);
	// retourner la variable qui stocke la somme
	return sum;
}

console.log(SimpleAdding(12));
console.log(SimpleAdding(4));
