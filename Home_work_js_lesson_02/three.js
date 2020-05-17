'use strict'

function math(x, y, znak) {
	try {
		var res;
		switch (znak) {
		case '+': {
			res = x + y;
			break;
		}
		case '-': {
			res = x - y;
			break;
		}
		case '*': {
			res = x * y;
			break;
		}
		case '/': {
			res = x / y;
			break;
		}
		}

		if (res != null) {
			return res;
		} else {
			console.log('Wrong input')
		}
	} catch (err) {
		console.log(err);
	}
}

console.log(math(4, 5, '*'));
console.log(math(21, 14, '-'));
console.log(math(15, 9, '+'));
console.log(math(32, 8, '/'));