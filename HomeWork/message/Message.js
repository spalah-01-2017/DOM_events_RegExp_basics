class Message {
	constructor (message) {
		this.message = message;
	}
}

Message.prototype.render = function () {
	let body = document.querySelector('body');
	let content = document.createElement('div');
	let close = document.createElement('p');
	let message = document.createElement('p');

	close.textContent = '✖';
	message.textContent = this.message;

	content.setAttribute('class', 'content');
	content.style.cssText = "background: red; \
	height: 250px; \ ";

	close.setAttribute('class', 'close');
	close.style.cssText = "font-size: 50px; \
	color: #fff; \
	margin: 0px; \
	text-align: right; \
	margin-right: 9px; \ ";

	message.style.cssText = "color: #fff; \
	text-align: center; \
	font-size: 100px; \
	margin: 0px; \ ";

	content.appendChild(close);
	content.appendChild(message);
	

	body.insertBefore(content, document.body.firstChild);
}

Message.prototype.destroy = function () {
	let close = document.querySelector('.close');
	let content = document.querySelector('.content');

	function closeDiv () {
		content.remove();
	}

	close.addEventListener('click', closeDiv);
}
