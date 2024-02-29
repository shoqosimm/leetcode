const createCounter = (init) => {
	let val = init;
	const increment = () => {
		return ++val;
	};

	const decrement = () => {
		return --val;
	};

	const reset = () => {
		return (val = init);
	};

	return { decrement, increment, reset };
};
