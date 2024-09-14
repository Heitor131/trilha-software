// Função que retorna uma Promise
function buscarDados() {
    console.log("Buscando dados...")
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const sucesso = true;
        if (sucesso) {
          resolve("Dados recebidos com sucesso!");
        } else {
          reject("Falha ao buscar dados.");
        }
      }, 2000); // Simula uma operação que demora 2 segundos
    });
  }
  
  // Usando a Promise
  buscarDados()
    .then(resultado => {
      console.log(resultado); // "Dados recebidos com sucesso!"
    })
    .catch(erro => {
      console.log(erro); // "Falha ao buscar dados."
    });
  