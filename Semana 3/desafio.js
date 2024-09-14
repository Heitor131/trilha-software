// const vetor = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// function pegarVetorComMaiorSoma(vetor) {
//     let soma = 0
//     let maiorSoma = 0
//     let subVetor = []

//     for (let i = 0; i < vetor.length; i++) {
//         soma = 0
//         for (let j = i; j < vetor.length; j++) {
//             soma += vetor[j]
//             if (soma > maiorSoma) {
//                 maiorSoma = soma
//                 subVetor = vetor.slice(i, j + 1)
//             }
//         }
//     }

//     return `${subVetor} = ${maiorSoma}`
// }

// console.log(pegarVetorComMaiorSoma(vetor)) // 6



const passwordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')

function validarSenha(senha) {
    return passwordRegex.test(senha)
}

console.log(validarSenha('AbTp9!fok')) // true