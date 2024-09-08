//Implementa una función que simule el envío de un correo electrónico. La función debe aceptar una dirección de correo electrónico como parámetro y devolver una promesa que se resuelve con el mensaje “Correo enviado a [dirección]” si se proporciona una dirección. Si no se proporciona una dirección, la promesa debe ser rechazada con el mensaje “Dirección de correo no proporcionada”. Además, se menciona que debes simular un tiempo de envío de 2 segundos.


let correo = "bryanaviles605@gmail.com"


const validarCorreo=(correoElectronico)=>{
    return new Promise((resolve,reject)=>{
        console.log("espere un momento estmos validando correo")
        setTimeout(()=>{
            if(correoElectronico == correo){
                resolve(`Correo enviado a ${correo}`)
            }else{
                reject(`Direccion de correo no proporcionada`)
            }
        },2000)

    })
}

validarCorreo(correo)
.then(res=>{
    console.log(`Mensaje: ${res}`)
})
.catch(error =>{
    console.log(`Mensaje: ${error}`)
})