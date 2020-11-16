var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var grana = parseInt(prompt());

console.log(grana);
console.log(parseInt(grana/100) + " nota(s) de R$ 100,00");
console.log(parseInt((grana%100)/50) + " nota(s) de R$ 50,00");
console.log(parseInt(((grana%100)%50)/20) + " nota(s) de R$ 20,00");
console.log(parseInt((((grana%100)%50)%20)/10) + " nota(s) de R$ 10,00");
console.log(parseInt(((((grana%100)%50)%20)%10)/5) + " nota(s) de R$ 5,00");
console.log(parseInt((((((grana%100)%50)%20)%10)%5)/2) + " nota(s) de R$ 2,00");
console.log(parseInt(((((((grana%100)%50)%20)%10)%5)%2)/1) + " nota(s) de R$ 1,00");