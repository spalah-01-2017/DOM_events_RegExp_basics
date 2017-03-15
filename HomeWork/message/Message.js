class Message {
	constructor (message) {
		this.message = message;
		this.body = document.querySelector('body');
		this.content = document.createElement('div');
		this.close = document.createElement('p');
		this.messagePar = document.createElement('p');
		this.close.textContent = '✖';
		this.messagePar.textContent = this.message;
	}
}

Message.prototype.render = function () {

	this.content.style.cssText = "background: red; \
	height: 250px; \ ";

	this.close.style.cssText = "color: #fff;	\
	font-size: 50px; \
	margin: 0px; \
	text-align: right; \
	margin-right: 9px; \
	cursor: pointer; \ ";

	this.messagePar.style.cssText = "color: #fff; \
	text-align: center; \
	font-size: 100px; \
	margin: 0px; \ ";

	this.content.appendChild(this.close);
	this.content.appendChild(this.messagePar);
	

	this.body.insertBefore(this.content, document.body.firstChild);
	this.destroy();
}

Message.prototype.destroy = function () {
	let content = this.content;

	function closeDiv () {
		content.remove();
	}

	this.close.addEventListener('click', closeDiv);
}
