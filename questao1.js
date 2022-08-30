var nota1 = Number(window.prompt("digite sua primeira nota!"))
var nota2 = Number(window.prompt("digite sua segunda nota!"))
var nota3 = Number(window.prompt("digite sua terceira nota!"))

var total = Number( nota1 + nota2 + nota3)
var media = Number(total / 3)

//media.toFixed(1);

document.write("sua media é: " + media)

// + soma, - subtrair, / dividir, * multiplicar, ** potenciar