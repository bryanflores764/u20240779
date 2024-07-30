// Crea un programa que cuente el número de palabras en una frase ingresada por el usuario.

let readline = require(`readline`)

let rl = readline.createInterface(
    process.stdin,
    process.stdout,
)
 
rl.question(`Escriba el frase que quiere contar las palabras:`,(frase0)=>{
    
  const frase1 = frase0.replace(/^\s*|\s*$/gi,'');
  const frase2 = frase1.replace(/[ ]{2,}/gi,' ');
  const frase3 = frase2.replace(/\n/,'\n');
  const fraseFinal = frase3.split(' ').length;
    

  console.log(`su numero de palabras es: ${fraseFinal}`)
  process.exit()


})
