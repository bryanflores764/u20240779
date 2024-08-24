//Escribe un programa que calcule la diferencia en días entre dos fechas. (Las dos fechas serán las que usted decida trabajar)
function calcularFechas(fecha1, fecha2){

    let fechaUtc =  Date.UTC(fecha1.getFullYear(),fecha1.getMonth(),fecha1.getDate())
    let fechaUtc2 =  Date.UTC(fecha2.getFullYear(),fecha2.getMonth(),fecha2.getDate())
    let diferencia = (fecha1-fecha2)/(1000* 60 * 60 * 24);

    return Math.floor(diferencia);
}

let fechaDiferencia1 = new Date('2021-10-21')
console.log(fechaDiferencia1)

let fechaDiferencia2 = new Date('2005-09-12')
console.log(fechaDiferencia2)

console.log(calcularFechas(fechaDiferencia1,fechaDiferencia2));