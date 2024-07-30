// Crea un programa que verifique si una palabra ingresada por el usuario es un palíndromo (se lee igual de adelante hacia atrás).

let readline = require(`readline`)

let rl = readline.createInterface(
    process.stdin,
    process.stdout,
)

rl.question(`Escribe la palabra que quieres verificar si es palindromo:`, (palabra)=>{
    const palabra1 = palabra.split("");
    const palabra2 = palabra1.reverse();
    const palabraPalindromo = palabra2.join("")

    if(palabra == palabraPolindromo){
        console.log("su palabra si es palindroma")

    }else{
        console.log(`su palabra no es palindroma`)
    }

    process.exit()
})