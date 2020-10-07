var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nome = lines.shift();
var salario = parseFloat(lines.shift());
var vendas = parseFloat(lines.shift());

var total = salario + (vendas * 15/100);

console.log("TOTAL = R$ " + total.toFixed(2));