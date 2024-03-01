const filter = (arr, fn) => {
	const transformedArray = [];
	for (let i = 0; i < arr.length; i++) {
		if (fn(arr[i], i)) {
			transformedArray.push(arr[i]);
		}
	}
	return transformedArray;
};
