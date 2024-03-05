const once = (fn) => {
	let exicute = false;
	return function(...args) {
		if (!exicute) {
			exicute = true;
			return fn(...args);
		}
	};
};
