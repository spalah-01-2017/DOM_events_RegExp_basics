	let submit = document.querySelector('.input-btn');

	function search (e) {
		e.preventDefault();
		let request = 'http://google.com/search?q=';
		let string = document.querySelector('.input-item').value;
		let arr = string.split(' ');
		let reqArr = [];
		arr.forEach(function (el, ind) {
			reqArr.push(el);
		});
		request += reqArr.join('+');
		window.open(request);
	}

	submit.addEventListener('click', search);
