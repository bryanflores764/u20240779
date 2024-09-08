//“Crea una función que simule un proceso de compra en línea. La función debe aceptar el monto de la compra. La promesa debe resolverse con el mensaje ‘Compra completada por [monto]’ si el monto es mayor a 0. Si el monto es 0 o menor, la promesa debe ser rechazada con el mensaje ‘Monto inválido para la compra’.”


let monto = 20

const validandoCompra=(montoDeCompra)=>{
    return new Promise((resolve,reject)=>{

        console.log("Procesando la  compra")

        setTimeout(()=>{
            if(montoDeCompra > 0){
                resolve(`Compra completa por monto ${montoDeCompra}`)
            }else{
                reject("Monto inválido para la compra")
            }
        },3000)
       
    })
}

validandoCompra(monto)
.then(res=>{
    console.log(`mensaje: ` + res)
})
.catch(error=>{
    console.log(`mensaje: ` + error)
})