const { error } = require('console')
const fs = require('fs')

   const filename = './estudiantes.json'
const Modificar =()=>{
 
    fs.readFile(filename,'utf8',(error,data)=>{
        if(error){
            console.error("error al leer el archivo JSON: ",error)
            return;
        }try{
           const estudiante = JSON.parse(data)
           estudiante[0].Edad = 30
    
           fs.writeFile(filename,JSON.stringify(estudiante,null,2),(error)=>{
            if(error){
                console.error('error al modificar el archivo JSOn:',error)
                return;
            }else{
                console.log("Edad del estudiante modificado exitosamente")
            }
           });
        }catch(error){
            console.error("Error al parsear el archivo JSOn",error)
    
        }
    })
}

module.exports= Modificar

