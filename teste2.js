let somar = (a,b) => a+b
let subtrair = (a,b) => a-b
let multiplicar = (a,b) => a*b
let dividir = (a,b) => a/b
let elevar = (a,b) => a**b
let resto = (a,b) => a%b

let calculadora = (a,b,operação) => operação(a,b)

console.log(calculadora(7,3,subtrair))