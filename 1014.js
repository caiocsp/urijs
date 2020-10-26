var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var dist = lines.shift();
var gasto = parseFloat(lines.shift());

console.log((dist/gasto).toFixed(3) + " km/l");