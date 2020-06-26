var arr = [ 'pan', 'top', 'pal', 'tool' ];
var arr2 = arr.map(function(el) {
	el = el.split(' ');
	var r = el.reverse();
	r = el.join;

	return r(' ');
});

console.log(arr2);
