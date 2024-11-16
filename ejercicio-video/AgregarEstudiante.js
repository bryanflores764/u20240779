const { error } = require('console')
const fs = require('fs')
const { json } = require('stream/consumers')

const filename = './estudiantes.json'


const Agregar =()=>{
    fs.readFile(filename,'utf8',(error,data)=>{
        if(error){
            console.error("error el leer el archivo JSON",error)
            return;
        }
            const estudiantes = JSON.parse(data)
            const nuevosestudiante=  {id:4 ,Nombre:"Rodrigo" , Apellido:"Aviles" , Carrera:"ingineria de sotfware" ,Edad:17}
            estudiantes.push(nuevosestudiante)
    
            fs.writeFile(filename,JSON.stringify(estudiantes,null,2),(error)=>{
                if(error){
                    console.error('Error al ecribir el archivo JSOn',error)
                    return;
                }
    
                console.log('Nuevo estudiante esta agregado al Archivo JSON')
                
            })
        
    })
}

module.exports= Agregar

