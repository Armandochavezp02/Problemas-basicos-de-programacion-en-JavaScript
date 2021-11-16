const calif1 = [];

for(let x = 0; x<10 ; x++){
    calif1.push(prompt("Introduzca la calificacion numero" + x))
}

const calif2 = calif1.map(convertidor);

function convertidor(n){
   return Number(n)
}

function suma(sum, a){
    return (sum + a); 
}

let media = calif2.reduce(suma);

console.log(media / 10);