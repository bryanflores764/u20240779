const fs = require('fs')

const filename = './estudiantes.json'


const Leer = ()=>{
    fs.readFile(filename,'utf8',(error ,data)=>{
        if(error){
            console.log("Error al leer el archivo JSON: ",error)
            return;
        }try{
            const ObjetoJson = JSON.parse(data)
            console.log("Los estudiantes son: ",ObjetoJson)
        }catch(error){
            console.error("error al Parsear el archivo JSOn")
        }
    })
}

module.exports= Leer;
