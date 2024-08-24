//Escribe un programa que obtenga el nombre del mes actual y lo muestre en la consola.
let mes1 = new Date()
 const mes2 = mes1.getMonth()


let mes3 =  ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

console.log(`usted se encuentra en el mes de: ${mes3[mes2]}`)