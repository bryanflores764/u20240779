const { error } = require('console');
const fs = require('fs');
const filename ='./estudiantes.json'

const Borrar =()=>{
    fs.readFile(filename, 'utf-8', (error, data) => {
        if(error){
          console.error("error al leer el archivo JSOn:",error)
        };
      
        try {
          const estudiantes = JSON.parse(data);
          const indice = estudiantes.findIndex(v => v.id === 2);
          estudiantes.splice(indice, 1);
          fs.writeFile(filename, JSON.stringify(estudiantes, null, 2), (err) => {
            if (err){
              console.error('Error al escribir:', err);
            }else { console.log('Estudiante eliminado');}
          });
        } catch (error) {
          console.error('Error al parsear:', error);
        }
      });
}

module.exports= Borrar

