function tiro() {
    let res = Math.floor(Math.random() * 6) + 1;
    return res;
}

let d1 = 0;
let d2 = 0;
let contador = 0;

for(let x = 0; x < 100; x++){
    d1 = tiro()
    d2 = tiro()
    if(d1 + d2 == 10){
        contador ++
    }

} 

console.log("La cantidad de veces que los dados sumaron 10 es de: " + contador)

