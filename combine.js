function combine(arr = []){
	let result = []
	function combine(sub = [], i = 0) {
		let c, v;
		while(v = arr[i++]){;
			result.push(c = [...sub, v])
			combine(c, i)
		};
	}; 
	combine();
	return result
};
