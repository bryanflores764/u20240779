//Crea un objeto Date para la fecha : Feb 20, 2012, 3:12 am. Deberá formatear la hora para que muestre la que aquí se le indica 

let fecha = new Date('2012-02-20T03:12:00')
let opcion = {month: 'short',}
let meses = ["enero","febrero", "marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]
let fehaMes = meses[fecha.getMonth(fecha.toLocaleDateString("es-sv",opcion))]
console.log(`La fecha pedida es: ${fehaMes} ${fecha.getDate() }, ${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}0 am.`)