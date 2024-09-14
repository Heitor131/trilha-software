// Função para simular busca de dados de diferentes fontes
function buscarDadosA() {
    return new Promise(resolve => setTimeout(() => resolve("Dados A"), 1000));
  }
  
  function buscarDadosB() {
    return new Promise(resolve => setTimeout(() => resolve("Dados B"), 1500));
  }
  
  function buscarDadosC() {
    return new Promise(resolve => setTimeout(() => resolve("Dados C"), 500));
  }
  
  // Executando todas as promessas ao mesmo tempo
  Promise.all([buscarDadosA(), buscarDadosB(), buscarDadosC()])
    .then(resultados => {
      console.log(resultados); // ["Dados A", "Dados B", "Dados C"]
    })
    .catch(erro => {
      console.log("Erro:", erro);
    });
  