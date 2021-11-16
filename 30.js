let num1 = prompt("Ingrese un numero")
let num2 = prompt("Ingrese un segundo numero")
console.log("1. Suma")
console.log("2. Resta")
console.log("3. Multiplicacion")
console.log("4. Division")
let input = prompt("Ingrese la operacion que desea realizar")

if(input == 1){
    console.log(Number(num1) + Number(num2))  
}
else if(input == 2){
    console.log(Number(num1) - Number(num2))
}
else if(input == 3){
    console.log(Number(num1) * Number(num2))
}
else if(input == 4){
    console.log(Number(num1) / Number(num2))
}