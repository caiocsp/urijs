var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pi = 3.14159;

var raio = parseFloat(lines.shift());

var A = pi * Math.pow(raio, 2);

console.log("A="+A.toFixed(4));