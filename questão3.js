var salario = Number(window.prompt("Digite o valor do seu salário antes do reajuste!"))
var reajuste = Number(window.prompt("Digite Quantos por cento de reajuste subiu seu salário!"))
var valor_reajuste = Number(salario / reajuste)

var novosalario = Number(valor_reajuste + salario)
var por_cento = ",00"
var sl = novosalario + por_cento
document.write("Seu salário atual é " + sl)