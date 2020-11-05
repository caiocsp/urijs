var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var horas = lines.shift();
var km = lines.shift();

var litros = parseFloat((km*horas) / 12);

console.log(litros.toFixed(3));