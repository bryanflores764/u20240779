const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Crear = require("./CrearArchivo");
const Leer = require("./LeerArchivo");
const Agregar = require("./AgregarEstudiante");
const Modificar = require("./ActualizarInformacion");
const Borrar = require("./BorrarEstudiante");
const { setTimeout } = require("timers/promises");

const showMenu = () => {
  console.log("\n----- Menú -----");
  console.log("1. Crear archivo JSON");
  console.log("2. Leer archivo JSON");
  console.log("3. Agregar estudiante");
  console.log("4. Modificar Informacion de estudiante");
  console.log("5. Eliminar Estudiante");
  console.log("6. Salir");
};

 const MenuOpcion =(opcion)=>{
    switch (parseInt(opcion)) {
        case 1:
          Crear()
          rl.close()
          break;
        case 2:
          Leer()
          rl.close()
          break;
        case 3:
          Agregar()
          rl.close()
          break;
        case 4:
          Modificar()
          rl.close()
          break;
        case 5:
          Borrar()
          rl.close()
          break;
        case 6:
          console.log("saliendo del programa");
          rl.close()
          return;
        default:
          console.log("Opcion inavlida intentelo de nuevo");
          rl.close()
      }

      setTimeout(SelecionOpcion,100)
      
 }


 const SelecionOpcion =()=>{
    showMenu()
    rl.question("selecione una opcion: ", MenuOpcion)
 }

 SelecionOpcion()
