var arr = [
	{
		prénom: 'Daniel',
		nom: 'Beckham'
	},
	{
		prénom: 'David',
		nom: 'Craig'
	}
];

var arr2 = arr.map(function(el) {
	el.fullName = el.prénom + ' ' + el.nom;
	return el;
});

console.log(arr2);
