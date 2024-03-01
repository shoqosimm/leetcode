const reduce = (nums, fn, init) => {
	let sum = init;
	nums.forEach((item) => {
		sum = fn(sum, item);
	});
	return sum;
};
