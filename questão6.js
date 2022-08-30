let c = Number(window.prompt("Qual o valor do empréstimo que você deseja?"))
let t = Number(window.prompt("Digite o número de em quantos meses deseja pagar!"))

let total = Number(((c / 100)*6)*(1+0,2)^t)
let ept = Number(c + total)
let parcela = Number(ept / t)
document.write("o valor dos empréstimo com o juros é " + ept + "<br>Você vai pagar por mês o valor de " + parcela + ".")