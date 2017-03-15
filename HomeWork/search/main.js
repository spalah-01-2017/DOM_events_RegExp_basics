	let submit = document.querySelector('.input-btn');

	function search (e) {
		e.preventDefault();
		let request = 'http://google.com/search?q=';
		let string = document.querySelector('.input-item').value;
		request += string.replace(/ +/g, '+');

		window.open(request);
	}

	submit.addEventListener('click', search);
