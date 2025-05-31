/*
  Crie uma funnção que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings
*/
function filtrarNumeros(lista) {
    return lista.filter(item => typeof item === 'number')
}

const entrada = [1, 'a', 3, 'b', 5, 'teste', 7]
const resultado = filtrarNumeros(entrada)

console.log(resultado) 