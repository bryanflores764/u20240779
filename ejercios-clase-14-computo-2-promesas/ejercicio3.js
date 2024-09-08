//Implementa una función que verifique si un código de descuento es válido. La función debe aceptar un código de descuento y devolver una promesa. La promesa debe resolverse con el mensaje “Código de descuento válido” si el código es “DESCUENTO2024”. Si el código es diferente, la promesa debe ser rechazada con el mensaje “Código de descuento inválido”.


const validarCodigo=(codigo)=>{
    return new Promise((resolve,reject)=>{
        console.log(`Espere un momento estamos analizando su codigo de descuento`)
        setTimeout(()=>{
            if(codigo == "DESCUENTO2024"){
                resolve(`Su codigo de descuento es valido`)
            }else{
                reject(`Su codigo es invalido`)
            }
        },3000)
    
    
    })
}

validarCodigo("DESCUENTO2024")
.then(res=>{
    console.log(`Mensaje: ${res}`)
})
.catch(error=>{
    console.log(`Mensaje: ${error}`)
})