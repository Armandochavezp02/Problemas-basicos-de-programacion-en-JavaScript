const array = [
    [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),Math.floor(Math.random() * 100),Math.floor(Math.random() * 100),Math.floor(Math.random() * 100)], 
    [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),Math.floor(Math.random() * 100),Math.floor(Math.random() * 100),Math.floor(Math.random() * 100)],
    [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),Math.floor(Math.random() * 100),Math.floor(Math.random() * 100),Math.floor(Math.random() * 100)],
    [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),Math.floor(Math.random() * 100),Math.floor(Math.random() * 100),Math.floor(Math.random() * 100)]
] 

console.log(array)

let array_trans = array[0].map((_, colIndex) => array.map(row => row[colIndex]));

console.log(array_trans)