    const promessa = new Promise (() => {
        let sucesso = true;
        setTimeout(()=>{
            if(sucesso)
                resolve("Sucesso")
            else
                rejact("Falha")
        }, 2000)
    });
    
    promessa
        .then