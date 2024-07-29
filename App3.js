let readline = require(`readline`)

let rl = readline.createInterface(
    process.stdin,
    process.stdout,
)

rl.question(`ingrese el texto que quiera contar los caracteres`,(texto)=>{
    const numeroCaracteres = texto.length
    console.log(`el numero de caracteres del texto es : ${numeroCaracteres}`);
    process.exit() 
})