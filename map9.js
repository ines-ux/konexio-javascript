var arr = [
	{
		firstname: 'Daniel',
		surname: 'Beckam'
	},
	{
		firstname: 'David',
		surname: 'Craig'
	}
];

var arr2 = arr.map(function(el) {
	el.fullname = el.firstname + ' ' + el.surname;
	return el;
});

console.log(arr2);
