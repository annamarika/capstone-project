function saveToLocal(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLocal(key) {
	try {
		return JSON.parse(localStorage.getItem(key));
	} catch (error) {
		console.error(error.message);
	}
}

export { saveToLocal, loadFromLocal };
