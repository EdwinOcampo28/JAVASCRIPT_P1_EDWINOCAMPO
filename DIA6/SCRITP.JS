/*
2. 5 → debe entrar en .catch()
*/

function verificarNumeroAsync(numero){
    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    if (numero % 2 === 0){
                        resolve("Numero válido")
                    } else {
                        reject(new Error("Número es inválido."))
                    }
                },
                500
            )
        }
    )
}

verificarNumeroAsync(4)
    .then(
        (res) => console.log(res)
    )
    .catch(
        (err) => console.log(err.message)
    )