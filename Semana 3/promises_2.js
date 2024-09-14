// Função que retorna uma Promise para simular login
function login(usuario, senha) {
    console.log("Fazendo login...")
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (usuario === "admin" && senha === "1234") {
          resolve("Login bem-sucedido!");
        } else {
          reject("Credenciais inválidas.");
        }
      }, 2000);
    });
  }
  
  // Função que retorna outra Promise após o login
  function buscarPerfil() {
    console.log("Buscando perfil...")
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ nome: "João", idade: 30 });
      }, 2000);
    });
  }
  
  // Encadeando Promises
  login("admin", "1234")
    .then(mensagem => {
      console.log(mensagem); // "Login bem-sucedido!"
      return buscarPerfil();  // Retorna a próxima Promise
    })
    .then(perfil => {
      console.log("Perfil:", perfil); // "Perfil: { nome: 'João', idade: 30 }"
    })
    .catch(erro => {
      console.log("Erro:", erro); // Caso algum erro ocorra no processo
    });
  