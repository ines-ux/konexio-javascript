var test = 'bring your umbrella';
function letterCapitalize(sentence) {
	var pizarra = sentence.split(' ');

	//Transformacion de la frase a una pizarra

	//creacion del lazo
	for (var i = 0; i < pizarra.length; i++) {
		pizarra[i] = pizarra[i].substr(0, 1).toUpperCase(1) + pizarra[i].substr(1);
	}
	// todos los elementos relativos a transformar la primera letra en majuscula tenemos el cero que empieza por el index0 y se acaba
	// a la primera letra
	return pizarra.join(' ');
	// tenemos que transformar esta pizarra en una frase para obtener el objetivo
}

console.log(letterCapitalize(test));

// tenemos que mostrar el trabajar es por eso que tenemos que llamar a la funcion y a la variable que contiene el trabajo.
