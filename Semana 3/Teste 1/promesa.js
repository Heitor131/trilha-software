    const promessa = new Promise((resolve,reject) => {
        let sucesso = true;
        setTimeout(() =>{
            if(sucesso)
                resolve("Sucesso")
            else
            reject("Falha")
        }, 2000)
    });

    promessa
        .then((mensagem )=>{
            console.log(mensagem);
        })
        .catch((erro) => {
            console.log(erro);
        })
        .finally(()=>{
            console.log("Operação finalizada")
        })

    //=========ASYNC/ AWAIT=======================
    async function executarOperacao(){ // se tiver o async o awati precisam ser juntos 
            let resultado = await promessa; // Esperar a Promise ser resolvida
            console.log("Resultado com async/await" + resultado);
    }