var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var primeiral = lines.shift().split(" ");
var segundal = lines.shift().split(" ");

var x1 = parseFloat(primeiral[0]);
var y1 = parseFloat(primeiral[1]);
var x2 = parseFloat(segundal[0]);
var y2 = parseFloat(segundal[1]);

var dist = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

console.log(dist.toFixed(4));