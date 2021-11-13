console.log("Se imprimiran, contaran y sumaran los numeros multiplos de 2 que se encuentran entre el 1 y el 15")
let contador = 0;
let sum =0;

for(let x =1; x < 16; x++){
    if(x%2 == 0){
        console.log(x);
        contador++;
        sum = sum + x;
    }
}

let txt_contador = "La cantidad de multiplos de 2 es:"
console.log(txt_contador, contador);

let txt_sum = "La suma de los multiplos de 2 es:"
console.log(txt_sum, sum)