const message = 'Hello world'
let otherMessage = 'Hello new world'
var yetAnotherMessage = 'Hello bright new world'

let preco1 = 35.14
let preco2 = 29.19

// message = 'other text' - Não é possível alterar uma variável do tipo const
otherMessage = 'Hello my darling'
yetAnotherMessage = 'Hello my baby'

preco2 = "Pedrinho"

otherMessage = 9
yetAnotherMessage = false
otherMessage = {
  "nome": "Caio",
  "idade": 35,
  "signo": "Áries",
  "endereco": {
    "rua": "Rua dos bobos",
    "numero": 0
  }
}

let pessoa = {
  "nome": "Caio",
  "idade": 35,
  "estadoCivil": "Casado",
  "endereco": {
    "rua": "Rua dos bobos", "numero": 0
  }
}

console.log(pessoa)

let funcSomar = function somarValores(a, b) {
  console.log(a + b)
}

function subtrairValores(a, b) {
  console.log(a - b)
}

let multiplicarValores = (a, b) => {
  console.log(a * b)
}

let alterarNome = (nome) => {
    pessoa.nome = nome
    console.log(pessoa)
}

funcSomar(1, 5)
subtrairValores(8, 16)
multiplicarValores(10, 20)
alterarNome("Pedrinho Pé de Martelo")

// Log to console
console.log(message)
console.log(otherMessage.signo)
console.log(otherMessage.endereco.rua)
console.log(yetAnotherMessage)
console.log(preco1 + preco2)