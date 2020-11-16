var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var tempo = lines.shift();

var horas = parseInt(tempo / 3600);
var minutos = parseInt((tempo% 3600) / 60);
var segundos = parseInt(tempo % 60);

console.log(horas+":"+minutos+":"+segundos);