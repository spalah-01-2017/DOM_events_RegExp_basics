var input = document.querySelector('.input');
var submit = document.querySelector('.submit');
var searchString = null;
var searchAddress = 'https://www.google.com/search?q=';

submit.addEventListener('click', search);

function search(e) {
    var inputValue = input.value.trim().replace(/[\s]+/ig, "+");
    var request = searchAddress + inputValue;
    window.location.href = request;
}