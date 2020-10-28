// function doubleIt(num){
//     return num*2
// }
// const doubleIt = function myfun(num){
//     return num*2;
// }

const doubleIt = num => num*2;
const add = (x,y) => x+y;
const give5 = () => 5;
const domath = (x, y) => {
    const sum = x+y;
    const diff = x-y;
    const result = sum*diff;
    return result;
}
const result = add(5, 43);
const result2 = give5();
const result3 = domath(5, 7);
console.log(result3);