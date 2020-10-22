var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var grana = parseFloat(lines.shift());

console.log("NOTAS:");
console.log(parseInt(grana/100) + " nota(s) de R$ 100.00");
console.log(parseInt((grana%100)/50) + " nota(s) de R$ 50.00");
console.log(parseInt(((grana%100)%50)/20) + " nota(s) de R$ 20.00");
console.log(parseInt((((grana%100)%50)%20)/10) + " nota(s) de R$ 10.00");
console.log(parseInt(((((grana%100)%50)%20)%10)/5) + " nota(s) de R$ 5.00");
console.log(parseInt((((((grana%100)%50)%20)%10)%5)/2) + " nota(s) de R$ 2.00");
console.log("MOEDAS:");
console.log(parseInt(((((((grana%100)%50)%20)%10)%5)%2)/1) + " moeda(s) de R$ 1.00");
console.log(parseInt((((((((grana%100)%50)%20)%10)%5)%2)%1)/0.5) + " moeda(s) de R$ 0.50");
console.log(parseInt(((((((((grana%100)%50)%20)%10)%5)%2)%1)%0.5)/0.25) + " moeda(s) de R$ 0.25");
console.log(parseInt((((((((((grana%100)%50)%20)%10)%5)%2)%1)%0.5)%0.25)/0.10) + " moeda(s) de R$ 0.10");
console.log(parseInt(((((((((((grana%100)%50)%20)%10)%5)%2)%1)%0.5)%0.25)%0.10)/0.05) + " moeda(s) de R$ 0.05");
console.log(Math.round(((((((((((((grana%100)%50)%20)%10)%5)%2)%1)%0.5)%0.25)%0.10)%0.05)/0.01)) + " moeda(s) de R$ 0.01");