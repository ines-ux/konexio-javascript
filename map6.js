var arr = [
	{
		firstName: 'Daniel',
		surname: 'Beckam'
	},
	{
		firstName: 'Daniel',
		surname: 'Craig'
	}
];

var arr2 = arr.map(function(person) {
	return person.firstName + ' ' + person.surname;
});

console.log(arr2);
