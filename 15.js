let input0 = prompt("Introduzca el primer numero");
let input1 = prompt("Introduzca el segundo numero");
let contador = 0;
let contador_pares = 0;
let sum_impar = 0;

for(input0; input0<input1; input0++){ 
    console.log(input0);
    if(input0 % 2 == 0){ //contador de numeros pares
        contador_pares++;
    }
    contador++; // contador de numeros naturales
    if (input0 % 2 != 0){
        sum_impar = sum_impar + input0; 
    }
}

let txt_contador = "La cantidad de numeros naturales es:"
console.log(txt_contador,contador);

let txt_contador_pares = "La cantidad de numeros pares es:"
console.log(txt_contador_pares,contador_pares);

let impar_txt = "La suma de los numeros impares es:";
console.log(impar_txt, sum_impar)

//Todos somos criaturitas del señor, es por eso que no elimino bugs.