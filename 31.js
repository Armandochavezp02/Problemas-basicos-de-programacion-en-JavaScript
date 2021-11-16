let x = prompt("Ingrese un numero")

console.log("1. ¿El numero es primo?")
console.log("2. Encontrar su factorial")
console.log("3. Imprimir su tabla de multiplicacion")
let input = prompt("Ingrese la operacion que desea realizar")

if(input == 1){ //. ¿El numero es primo?
    if (x % 2 != 0){
        console.log(x + " es primo");   
    } else {
        console.log(x + "no es primo"); 
    }
}
else if(input == 2){ //Factorial
    function factorial(n){
        if(n == 0 || n == 1){
            return 1;
        } else {
            return n * factorial(n-1);
        }
      }
    console.log(factorial(x))
}
else if(input == 3){ //Tabla de multiplicacion
    for(let y = 1; y < 11; y++){
        console.log(x * y);
    }
}