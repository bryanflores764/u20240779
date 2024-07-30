let readline = require(`readline`)

let rl = readline.createInterface(
    process.stdin,
    process.stdout,
)

rl.question(`Escriba la cadena de texto que quiere invertir: `, (frase)=>{
    const fraseInvertida = frase.split(``).reverse().join(``)
    console.log(`su frase invertida es: ${fraseInvertida}`)
})