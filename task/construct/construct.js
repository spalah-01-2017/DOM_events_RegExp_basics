 function Message(str) {
     this.str = str;
 }
 Message.prototype.render = function() {
     var body = document.querySelector('body');
     var alert = document.createElement('div');
     var close = document.createElement('span');
     close.textContent = '✖';
     alert.setAttribute('class', 'alert-msg');
     close.setAttribute('class', 'close-btn');
     close.style.cssText = "position: absolute; top:10px; right: 10px; cursor: pointer"
     alert.textContent = this.str;
     alert.style.cssText = "position: fixed;z-index: 1000; top:0;left: 0; width:100%; padding: 40px 0; text-align: center; background: red;color: #fff; font-family: Verdana, Tahoma,Arial, Helvetica, sans-serif";
     alert.appendChild(close);
     body.insertBefore(alert, document.body.firstChild);
     document.querySelector('.close-btn').addEventListener('click', destr);

     function destr(e) {
         document.querySelector('.alert-msg').remove();
     }
 }