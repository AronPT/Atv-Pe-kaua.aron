var eleitores = Number(window.prompt("Digite o número total de eleitores da cidade: "))
var votobranco = Number(window.prompt("Digite os votos brancos: "))
var votonulo = Number(window.prompt("Digite os votos Nulo: "))
var votovalido = Number(window.prompt("Digite os votos válidos"))

var branco = Number((votobranco *100) / eleitores)
var nulo = Number((votonulo*100) / eleitores)
var valido = Number((votovalido*100) / eleitores)

document.write("Em relação ao total de eleitores é correto afirmar que, <br>A porcentagem de Brancos é: " + branco, "%" + "<br> porcentagem de votos de votos Nulo é: " + nulo, "%" + "<br>A porcetagem de votos Válidos é: " + valido, "%")
