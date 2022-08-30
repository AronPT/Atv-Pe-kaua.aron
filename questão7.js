//D = raizQuadrada( (x2 - x1)² + (y2 - y1)²)
function calculoX(x1, x2){
    var x1 = parseInt(prompt("Digite o valor de x1: "));
    var x2 = parseInt(prompt("Digite o valor de x2: "));
    console.log("Valor de X1: " + x1);
    console.log("Valor de X2: " + x2);
    var x3 = Math.pow(x2 - x1, 2);
    return x3;

}
 function calculoY(y1, y2){
    var y1 = parseInt(prompt("Digite o valor de y1: "));
    var y2 = parseInt(prompt("Digite o valor de y2: "));
    var y3 = Math.pow(y2 - y1, 2);
    console.log("Valor de Y1: " + y1);
    console.log("Valor de Y2: " + y1);
    return y3;
}

 function distancia(x, y){
    var res = Math.sqrt((x + y));
    return res;
}
var x = calculoX();
var y = calculoY();
var d = distancia(x, y);

document.write("Valor final é: " + d);