const array_num = [];
let men_txt = "Numero menor:";
let may_txt = "Numero mayor:";

for(let x = 0; x <5; x++){
    array_num.push(Number(prompt("Ingrese un numero") ))
};

array_num.sort(function(a,b){return a-b});
console.log(men_txt, array_num[0]);
console.log(may_txt, array_num[array_num.length-1]);
console.log(array_num);
