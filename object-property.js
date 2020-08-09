
const students = [
    {id:1,name:'Sohan'},
    {id:2,name:'Rohan'},
    {id:3,name:'tumi'},
    {id:4,name:'ami'}
]
// const outPut = [];
// for(let i=0; i< students.length; i++){
//     const element = students[i];
//     const result = element.id;
//     outPut.push(result)
// }
// console.log(outPut);

const result = students.map(x=> x.name);
const bigger = students.filter(x=> x.id > 2)
const biggerOne = students.find(x=> x.id > 2)

console.log(bigger);
