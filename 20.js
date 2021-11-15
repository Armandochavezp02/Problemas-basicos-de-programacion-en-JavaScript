function factorial(n){
  if(n == 0 || n == 1){
      return 1;
  } else {
      return n * factorial(n-1);
  }
}

let input = prompt("Ingrese un numero")
respuesta = factorial(input)
console.log("El factorial de " + input + " es: " + respuesta);