# Trabalho Final Natalia Ferreira

Este repositório reúne o trabalho final da disciplina Programação para Automação de Testes, com o objetivo de desenvolver funções em JavaScript que atendam aos testes unitários propostos, utilizando estruturas condicionais, lógica assíncrona e boas práticas de programação.

## 📁 Estrutura do Repositório

```
.
├── trabalho-final/
│   ├── trabalho-final.js   # Testes unitários com assert
│   └── trabalho.js         # Funções implementadas
│
└── trabalhos-extras/
    ├── funcao-ContadorDeVogais.js     # Conta vogais em textos
    └── funcao-FiltrarNumeros.js       # Filtra números de uma lista
```

## ✅ Testes contemplados

Os testes cobrem os seguintes cenários:

- ✅ Quando informado um nome para o pet, DEVE ser impresso em letras maiúsculas
- ✅ Quando a idade = 1 + porte M, DEVE ser permitida a adoção
- ✅ Quando o peso = 14.5, DEVE ser retornado 4350 gramas para o consumo diário
- ✅ Quando o porte = pequeno, DEVE ser retornada a atividade adequada
- ✅ Quando buscar dado de exemplo, DEVE retornar um valor de forma assíncrona

## 🧪 Execução dos testes

Para executar os testes:

```bash
npx mocha trabalho-final/trabalho-final.js
```

## 🧪 Trabalhos Extras

### 🔤 funcao-ContadorDeVogais.js
Conta quantas vogais (`a`, `e`, `i`, `o`, `u`) existem em um texto.  

#### Exemplo de uso:
```js
contarVogais('Nathanael Santana') // 7
contarVogais('Naty ferreira')     // 6
```

---

### 🔢 funcao-FiltrarNumeros.js
Filtra e retorna apenas os números de uma lista contendo números e strings.

#### Exemplo de uso:
```js
filtrarNumeros([1, 'a', 3, 'b', 5, 'teste', 7]) // [1, 3, 5, 7]
```

💡 Desenvolvido por Natalia Ferreira Ventura como parte do curso de Pós-Graduação em Automação de Testes de Software.