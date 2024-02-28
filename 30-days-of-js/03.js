var expect = function(value) {
	return {
		toBe: function(val1) {
			if (value === val1) {
				return true;
			} else {
				throw "Not Equal";
			}
		},
		notToBe: function(expect) {
			if (value === expect) {
				throw new Error("Equal");
			} else return true;
		},
	};
};
