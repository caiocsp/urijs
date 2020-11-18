var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(" ");

var A = valores[0];
var B = valores[1];
var C = valores[2];
var D = valores[3];

if(B > C && D > A && (C + D) > (A + B) && C > 1 && D > 1 && A % 2 === 0){
    console.log("Valores aceitos");
}
else {
    console.log("Valores nao aceitos");
}