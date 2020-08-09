
function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const colck1 = stopWatch();

console.log(colck1());
console.log(colck1());
console.log(colck1());
console.log(colck1());

const colck2 = stopWatch();
console.log(colck2());
console.log(colck2());
console.log(colck2());