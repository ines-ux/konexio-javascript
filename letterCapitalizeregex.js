var test = 'what a wonderful world';
function letterCapitalize2(sentence) {
	var tab = sentence.split(' ');
	for (i = 0; i < tab.length; i++) {
		tab[i] = tab[i].replace(/^\D/, function(l) {
			// D correspond à un caractère qui n'est pas un chiffre
			// definir l'expression comme parenthèse
			// ^ début du string ( premier caractère de la chaîne)
			// .replace changer le caractere de depart minuscule  à ce qu'on veut en locurence le meme caractère mais en majuscule.
			// function (l) elle va recuperer ce qu'on avait mis dans la fonction reguliere /^\D/
			//pour ensuite transformer la premier caractère en majuscule
			return l.toUpperCase();
		});
	}
	return tab.join(' ');
}
console.log(letterCapitalize2(test));
