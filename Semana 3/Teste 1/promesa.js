    const promessa = new Promise((resolve,reject) => {
        let sucesso = false;
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

    