var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = lines.shift().split(" ");

var a = parseInt(entrada[0]);
var b = parseInt(entrada[1]);
var c = parseInt(entrada[2]);

var MaiorAB = parseInt((a + b + Math.abs(a-b)) / 2);

var MaiorABC = parseInt((MaiorAB + c + Math.abs(MaiorAB - c)) / 2);

console.log(MaiorABC + " eh o maior");