
let timeouts = {};

const debounce = (key, method, period) => {

	const currentTimeout = timeouts[key];

	if (currentTimeout) clearTimeout(currentTimeout); 

	timeouts[key] = setTimeout(() => {
		method();
		timeouts[key] = undefined;
	}, period);
}

export default debounce;