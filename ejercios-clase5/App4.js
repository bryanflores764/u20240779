let readline = require(`readline`)

let rl = readline.createInterface(
    process.stdin,
    process.stdout,
)

rl.question(`escriba el texto que quiere convertir en mayuscula`, (textoMayuscula)=>{
    const mayuscula= textoMayuscula.toUpperCase();
    console.log(`su texto convertido ha mayuscula es : ${mayuscula}`);
    process.exit() 
})