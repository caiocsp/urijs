var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var pi = 3.14159;
var raio = parseFloat(lines.shift());

var vol = (4/3.0) * pi * Math.pow(raio, 3);

console.log("VOLUME = " + vol.toFixed(3));
