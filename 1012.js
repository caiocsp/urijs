var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var pi = 3.14159;
var ABC = lines.shift().split(" ");

var A = parseFloat(ABC[0]);
var B = parseFloat(ABC[1]);
var C = parseFloat(ABC[2]);

var tri = (A * C) / 2;
var circ = Math.pow(C, 2) * pi;
var tra = (A + B) * C / 2;
var qua = Math.pow(B, 2);
var ret = A * B;

console.log("TRIANGULO: " + tri.toFixed(3));
console.log("CIRCULO: " + circ.toFixed(3));
console.log("TRAPEZIO: " + tra.toFixed(3));
console.log("QUADRADO: " + qua.toFixed(3));
console.log("RETANGULO: " + ret.toFixed(3))