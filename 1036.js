var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(" ");

var x1 = parseFloat(valores[0]);
var x2 = parseFloat(valores[1]);
var x3 = parseFloat(valores[2]);

var d = Math.pow(x2,2) - (4 * x1 * x3);

var r1 = (-x2 + Math.sqrt(d)) / (2 * x1);

var r2 = (-x2 - Math.sqrt(d)) / (2 * x1);

if(!r1 || !r2){
  console.log("Impossivel calcular");
}
else{
  console.log("R1 = "+r1.toFixed(5));
  console.log("R2 = "+r2.toFixed(5));
}