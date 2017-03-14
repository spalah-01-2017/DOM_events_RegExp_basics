var arr = [];
var arr2 = new Array();

var reg = /abc/igm;
reg.test('abcdef');
var regConstr = new RegExp('abc');

function test(pattern, str) {
    var reg = new RegExp(pattern, 'i');
    return reg.test(str);
}

/\d\w/.test('pi = 3.14')

/\D/.test('123') //false
/\W/.test('12_A?3')//true

/[0-3]/.test('pi = 3.14') // true

/[0-3]/.test('pi = 5.64') //false

//^ $ . * + ? = ! : | \ / ( ) [ ] { }

/pi/.test('math.pi = 3.14')
/pi$/.test('pi = 3.14')
/^pi/.test('pi = 3.14')

/^\s\s\s\spi/.test('\t \t pi = 3.14')

/^\s+pi/.test('\t \t pi = 3.14')

/^\s*pi/.test('\t \t pi = 3.14 * 1')

/\*/.test('\t \t pi = 3.14 * 1')

/a.bc/.test('abc');//false
/a.?bc/.test('abc');//true
/a.*bc/.test('abc');//true
/a.+bc/.test('a+bc');//true
/1 \+ 1 =  2/.test('1 + 1 = 2')

/[3ac]/.test('abc123');

/[^3ac]/.test('a3c'); //false
/[^3ac]/.test('a3ch'); //true