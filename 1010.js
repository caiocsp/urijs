var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var item1 = lines.shift().split(" ");
var item2 = lines.shift().split(" ");

var compra1 = new Array(3);
var compra2 = new Array(3);

for (var i = 0; i < 3; i++){
    compra1[i] = item1.shift();
}

for (i = 0; i < 3; i++){
    compra2[i] = item2.shift();
}

var pagamento = (compra1[1] * compra1[2]) + (compra2[1] * compra2[2]);

console.log("VALOR A PAGAR: R$ " + pagamento.toFixed(2));