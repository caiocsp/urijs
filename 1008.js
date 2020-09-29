var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var num = lines.shift();
var horas = lines.shift();
var recebe = lines.shift();

var Salario = (horas * recebe);

console.log("NUMBER = " + num);
console.log("SALARY = U$ " + Salario.toFixed(2));