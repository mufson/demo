$(function() {

	function extendDeep(parent, child) {

		var i,
			tostr = Object.prototype.toString,
			astr = '[object Array]';

		child = child || {};

		for(i in parent) {
			if(parent.hasOwnProperty(i)) {
				if(typeof parent[i] == 'object') {
					child[i] = (tostr.call(parent[i]) === astr) ? [] : {};
					extendDeep(parent[i], child[i]);
				} else {
					child[i] = parent[i];
				}
			}
		}
		return child;
	};

	var dad = {
		counts: [1, 2, 3],
		reads: {
			paper: true
		}
	};
	var kid = extendDeep(dad);
	kid.counts.push(4);
	console.log(kid ); // "1,2,3,4"
	console.log(dad.counts.toString()); // "1,2,3"
	console.log(dad.reads === kid.reads); // falsekid.reads.paper = false;
});