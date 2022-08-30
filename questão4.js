var produto = window.prompt("Digite o nome do produto!")
var valor_atg = Number(window.prompt("Digite o valor do produto!"))

var por_cento = Number((valor_atg / 10)*3)
var valor_novo = Number(por_cento + valor_atg)

document.write("O " + produto + " pode ser vendido pelo valor de " + valor_novo + " e o lucro será de " + por_cento)