function exOh(str) {
	var comptex = 0;
	var compteo = 0;

	str = str.split('');

	for (var i = 0; i < str.length; i++) {
		if (str[i] === 'x') {
			comptex = comptex + 1;
		} else if (str[i] === 'o') {
			compteo = compteo + 1;
		}
	}

	if (comptex === compteo) {
		return true;
	} else {
		return false;
	}

	// console.log(comptex);
	// console.log(compteo);
}

console.log(exOh('xooxxo'));
console.log(exOh('x'));
