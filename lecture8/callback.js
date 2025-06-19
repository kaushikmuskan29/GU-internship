let arr = [1,2,3,4,5,6,7,8,9,10];

function square(num){
    return num*num
}
let sqArr = arr.map(square);
sqArr = arr.map(function(num){
    return num*num
})

sqArr = arr.map((num)=>{
    return num*num
})
console.log(sqArr)

let cubeArr = arr.map((num)=>{
    return num**3
})
console.log(cubeArr)

let arr1 = [1,2,3,4,5,6,7,8,9,10];
// filter -> to get specific element on the basis of condition.

function odd(num){
    return (num % 2 == 1)
}
let oddArr = arr.filter(odd);
console.log(oddArr);

function even(num){
    return (num % 2 == 0)
}
let evenArr = arr.filter(even);
console.log(evenArr);