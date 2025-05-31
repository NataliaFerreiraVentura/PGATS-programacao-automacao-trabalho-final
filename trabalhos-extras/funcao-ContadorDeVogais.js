/*
  Retorne o numero de vogais no texto fornecido. Consideramos a,e,i o eu como vogais para este Kata.O texto de entrada contera apenas letras minúsculas e espaços. 
  letras acentuadas nao fazem parte desse desafio
*/

function contarVogais(texto) {
    let contadorVogais = 0
    const vogais = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < texto.length; i++) {
        const caractere = texto[i]
        if (vogais.includes(caractere)) {
            contadorVogais++
        }
    }
    return contadorVogais
}

console.log(contarVogais('Nathanael Santana')) // Saída esperada: 6
console.log(contarVogais('Naty ferreira'))  // Saída esperada: 5