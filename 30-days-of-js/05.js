const map = (arr, fn) => {
	const transformedArray = [];
	for (let i = 0; i < arr.length; i++) {
		const transformedElement = fn(arr[i], i);
		transformedArray.push(transformedElement);
	}

	return transformedArray;
};
