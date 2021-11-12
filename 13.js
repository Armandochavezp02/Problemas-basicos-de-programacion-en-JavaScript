//Imprimir y contar los números que son múltiplos de 2 o de 3 
//que hay entre 1 y 100.
let contador = 0;
let txt = "La cantidad de numeros multiplos de 2 o 3 es:"
for(let x = 1; x <= 100; x++){
    if(x%2 == 0 || x%3 == 0){
        console.log(x);
        contador ++;
    }
}
console.log(txt, contador)