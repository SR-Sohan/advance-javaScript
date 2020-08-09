
const numbers= [3,4,5,6,7,8,9];

// const outPut = [];
// for(let i = 0;i< numbers.length; i++){ 
//     const element = numbers[i];
//     const result = element * element;
//     outPut.push(result);
// }
// function squre(element){ 
//     return element * element;
// }
// var result2 = numbers.map(element=> element * element)
// var result3 = numbers.map(x=>x*x)
// const result = numbers.map(function(element){ 
//     return element * element;
// })
// console.log(result3);

// var filterNumber = numbers.filter(x=> x>5);
var filterNumber = numbers.find(x=> x>5);

console.log(filterNumber);