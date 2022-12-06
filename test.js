const fetch = require('node-fetch')


fetch('http://localhost:5050/ff0000/hsla')
	.then((response) => response.json())
	.then((data) => console.log(data));

	['#25f44b', '#30e852', '#3cdd59', '#47d161', '#53c668', '#5eba6f', '#6aaf76', '#75a37e', '#819885'];