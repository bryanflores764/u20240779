// Crea un programa que tome una frase ingresada por el usuario y capitalice la primera letra de cada palabra.
let readline = require(`readline`)

let rl = readline.createInterface(
    process.stdin,
    process.stdout,
)

rl.question(`Escriba una la frase para capitalisar la primera letra: `, (palabraCapitalizar)=>{
    const palabraCapitalizar1 = palabraCapitalizar.charAt(0).toUpperCase() + palabraCapitalizar.slice(1)
    console.log(`Su frase capitalizada queda asi: ${palabraCapitalizar1}`)
    process.exit()

})