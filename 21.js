//Suma de numeros pares
function suma_de_pares(){
    let sum_par = 0;
    //let par_txt = "La suma de los numeros pares es:";
    for (let y = 1; y < 1001; y++ ){
        if (y % 2 == 0){
            sum_par = sum_par + y;
        }
    }
    return sum_par;
}


//Suma de numeros impares
function suma_de_inpares(){
    let sum_impar = 0;
    //let impar_txt = "La suma de los numeros impares es:";
    for (let z = 1; z < 1001; z++ ){
        if (z % 2 != 0){
            sum_impar = sum_impar + z; 
        }
    }
    return sum_impar;
}

let x = suma_de_pares();
console.log("La suma de los numeros pares es: " + x)

let y = suma_de_inpares();
console.log("La suma de los numeros impares es: " + y)