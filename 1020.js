var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var dias = lines.shift();

var ano = parseInt(dias/365);
var mes = parseInt((dias%365)/30);
var dia = parseInt((dias%365)%30);

console.log(ano.toFixed(0) + " ano(s)");
console.log(mes.toFixed(0) + " mes(es)");
console.log(dia.toFixed(0) + " dia(s)");