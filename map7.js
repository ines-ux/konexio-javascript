var arr = [
	{
		firstName: 'Daniel',
		surname: 'Beckam'
	},
	{
		firstName: 'David',
		surname: 'Craig'
	}
];

var arr2 = arr.map(function(person) {
	var fName = person.firstName + ' ' + person.surname;
	var obj = {
		fullName: fName
	};
	return obj;
});

console.log(arr2);
