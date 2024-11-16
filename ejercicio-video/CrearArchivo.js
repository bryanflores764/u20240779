const { error } = require('console')
const fs = require('fs')

const filename = "./estudiantes.json"
const Crear =()=>{
    const estudiantes = [
        {id:1 ,Nombre:"Bryan" , Apellido:"Flores" , Carrera:"ingineria de sotfware" , Edad:24},
        {id:2 ,Nombre:"Ismael" , Apellido:"Marquina" , Carrera:"ingineria de sotfware" ,Edad:56},
        {id:3 ,Nombre:"Emanuel" , Apellido:"Perdomo" , Carrera:"ingineria de sotfware" ,Edad:19}
    ]
    
    
    fs.writeFile(filename,JSON.stringify(estudiantes,null,2),(error)=>{
        if(error){
            console.log('Error al crear el archivo JSON: ',error)
        }else{
            console.log('Archivo creado exitosamente con tres estudiantes iniciales')
        }
    });
}

module.exports= Crear
