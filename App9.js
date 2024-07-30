// Escribe un programa que cuente el número de vocales en una palabra ingresada por el usuario.

let readline = require(`readline`)

let rl = readline.createInterface(
    process.stdin,
    process.stdout,
)
 
rl.question(`escriba la palabra ala cual le quiere contar vocales`, (frase)=>{
   const frase1 = frase.replace(/[^aeiouAEIOUÁÉÍÓÚáéíóú]/g, '').length;
   
  console.log(`su numero de vocales es ${frase1}`)
  process.exit()
})