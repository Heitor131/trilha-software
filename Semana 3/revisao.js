// // ====== VARIÁVEIS E TIPOS DE DADOS ======
// let nome = "João"; // String
// const idade = 25;  // Número (constante)
// let casado = false; // Boolean

// console.log(typeof nome); // Exibe os valores

// // ====== OPERADORES ======
// let som = 5 + 3; // Soma
// let subtracao = 10 - 4; // Subtração
// let multiplicacao = 2 * 3; // Multiplicação
// let divisao = 10 / 2; // Divisão
// let modulo = 7 % 2; // Resto da divisão (modulo)

// console.log(soma, subtracao, multiplicacao, divisao, modulo); 

// // ====== CONTROLE DE FLUXO ======
// if (idade >= 18) {
//   console.log("Você é maior de idade.");
// } else {
//   console.log("Você é menor de idade.");
// }

// let diaDaSemana = "terça";

// switch (diaDaSemana) {
//   case "segunda":
//     console.log("Começo da semana.");
//     break;
//   case "sexta":
//     console.log("Quase fim de semana!");
//     break;
//   default:
//     console.log("Dia normal.");
// }

// // ====== FUNÇÕES ======
// // Função simples
// function cumprimentar(nome, idade, maritalStatus, cep = null) {
//   return "Olá, " + nome + "!";
// }

// console.log(cumprimentar("Maria"));

// // Função com arrow function (ES6+)
// const somaNumeros = (a, b) => a + b;
// console.log(somaNumeros(10, 5));

// ====== ARRAYS ======
let frutas = ["Maçã", "Banana", "Laranja"];

// frutas.forEach((fruta, i) => {
//     console.log(fruta, i);
// })

// const rian = frutas.map((fruta, i) => {
//     console.log(fruta, i);
//     return "Rian"
// })

// console.log(rian)
// console.log(frutas[1]); // Acessar um item do array

// frutas.push("Uva"); // Adicionar um item ao array
// console.log(frutas);

// frutas.pop(); // Remover o último item do array
// console.log(frutas);

// // Loop em um array
// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

// // ====== OBJETOS ======
// let carro = {
//   marca: "Toyota",
//   modelo: "Corolla",
//   ano: 2021,
//   detalhes: function() {
//     return this.marca + " " + this.modelo + ", Ano: " + this.ano;
//   }
// };

// console.log(carro.marca);
// console.log(carro.detalhes()); // Chamar um método do objeto


// // Classes
// class Carro {
//     constructor(marca, modelo, ano) {
//         this.marca = marca;
//         this.modelo = modelo;
//         this.ano = ano;
//     }
    
//     detalhes() {
//         return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
//     }
// }

// // ====== LOOPS ======
// let contador = 0;

// while (contador < 5) {
//   console.log("Contador: " + contador);
//   contador++;
// }

// for (let i = 1; i <= 5; i++) {
//   console.log("Número: " + i);
// }

// // ====== PROMISES ======
// // Exemplo de Promise
// const promessa = new Promise((resolve, reject) => {
//   let sucesso = true; // Tente mudar para false para simular erro
//   setTimeout(() => {
//     if (sucesso) {
//       resolve("Operação bem-sucedida!");
//     } else {
//       reject("Falha na operação.");
//     }
//   }, 2000); // Simula uma operação de 2 segundos
// });

// // Tratando a Promise com then/catch
// promessa
//   .then(mensagem => {
//     console.log(mensagem);
//   })
//   .catch(erro => {
//     console.log(erro);
//   });

// // ====== ASYNC/AWAIT ======
// // Exemplo com async/await
// async function executarOperacao() {
//   try {
//     let resultado = await promessa; // Espera a Promise ser resolvida
//     console.log("Resultado com async/await: " + resultado);
//   } catch (erro) {
//     console.log("Erro com async/await: " + erro);
//   }
// }

// executarOperacao();

// // ====== OUTROS CONCEITOS ======

// // Template literals (ES6+)
// let saudacao = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;
// console.log(saudacao);

// // Desestruturação de objetos
// const { marca, modelo } = carro;
// console.log(`Carro: ${marca} ${modelo}`);

// // Spread operator (ES6+)
// let maisFrutas = ["Morango", "Abacaxi"];
// let todasFrutas = [...frutas, ...maisFrutas]; // Combina arrays
// console.log(todasFrutas);

// // Rest parameter (ES6+)
// function somarTudo(...numeros) {
//   return numeros.reduce((acc, num) => acc + num, 0);
// }

// console.log(somarTudo(1, 2, 3, 4, 5)); // Soma todos os números passados

// // ====== CONCLUSÃO ======
// // Esse arquivo cobre uma variedade de conceitos básicos de JavaScript que podem ser usados para revisar ou ensinar os fundamentos da linguagem de forma simples e eficaz.
