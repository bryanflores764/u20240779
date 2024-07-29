let readline = require(`readline`)

let rl = readline.createInterface(
    process.stdin,
    process.stdout,
)

rl.question(`escriba el texto que quiere convertir en subcadena`, (textocadena)=>{
    const subcadena= textocadena.substring(0 ,10);
    console.log(`su texto convertido ha seb cadena es : ${subcadena}`);
    process.exit() 
})