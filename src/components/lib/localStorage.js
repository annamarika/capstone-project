function saveToLocal(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLocal(key, initialValue) {
	if (typeof window === 'undefined') {
		return initialValue;
	}
	try {
		const t = JSON.parse(localStorage.getItem(key)) || initialValue;
		return t;
	} catch (error) {
		console.error(error.message);
	}
}

export { saveToLocal, loadFromLocal };
