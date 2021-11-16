const calif1 = [];

for(let x = 0; x<10 ; x++){
    calif1.push(prompt("Introduzca la calificacion numero" + x))
}

let input = prompt("Ingrese la calificacion que desea buscar");
const calif2 = calif1.map(convertidor);

function convertidor(n){
   return Number(n)
}

let y = calif2.find(encontrar)
function encontrar(n){
    return n == input
}



