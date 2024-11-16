const { error } = require('console')
const fs = require('fs')
const filename = './estudiantes.json'

const Contar =()=>{

    fs.readFile(filename,'utf8',(error,data)=>{
        if(error){
            console.error('error al leer el archivo',error)
            return;
        }
    
        const estudiantes = JSON.parse(data)
        console.log('El numero de estudiantes es:',estudiantes.length)
        
    })
}

module.exports= Contar