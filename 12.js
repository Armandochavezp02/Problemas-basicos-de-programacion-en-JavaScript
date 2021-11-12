for(let x = 1; x <101; x++){
    console.log(x)
}

//Suma de numeros pares
let sum_par = 0;
let par_txt = "La suma de los numeros pares es:";
for (let y = 1; y < 101; y++ ){
    if (y % 2 == 0){
        sum_par = sum_par + y;
    }
}

console.log(par_txt, sum_par);

//Suma de numeros impares
let sum_impar = 0;
let impar_txt = "La suma de los numeros impares es:";
for (let z = 1; z < 101; z++ ){
    if (z % 2 != 0){
        sum_impar = sum_impar + z; 
    }
}

console.log(impar_txt, sum_impar)