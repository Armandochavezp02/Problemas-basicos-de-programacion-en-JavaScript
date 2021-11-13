console.log("¿Cuantas veces se encuentra la letra a en la siguiente frase?")
let input = prompt("Ingrese la frase")
let x = input.match(/a/g);
console.log(input);
console.log(x.length);
