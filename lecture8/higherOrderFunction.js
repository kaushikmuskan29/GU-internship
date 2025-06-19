// Higher order & callback fuctions

// higher order function - when we pass a function as a argument(parametres) to another function 

function helper(){
    console.log("Helper function is executing.......")
    return 10
}

function higherOrder(fun){
    console.log("Higher Order executing.......")
    let res = fun();
    return res+5;
    // return + (res) + 5;
}

let result = higherOrder(helper)
console.log(result)

// let result2 = higherOrder(function(){
//     console.log("This is anonymous function");
//     return "20";
// })
// console.log(result2)

let result2 = higherOrder(() => {
    console.log("This is anonymous function");
    return "20";
})
console.log(result2);

// callback function

function cb(a,b){
    console.log("call back executing");
    return a+b;
}

function parent(a,b,fun){
    console.log("higher order executing");
    let sum = a+b;
    // let result = fun(sum,20);
    // return result;
    return fun(sum,20)
}
let ans2 = parent(10,20,cb);
console.log(ans2)

// callback functions -- 

// these are the function which runs only when a particular task is completed

let arr = [1,2,3,4,5,6,7];
function square(num){
    return num * num;
    // return num ** 2
}
function cube(num){
    return num ** 3
}
function ArrayConvertor(array, fun){
    let ar = [];
    for(let element of array){
        let powVal = fun(element)
        ar.push(powVal)
    }
    return ar;
}
let sqArr = ArrayConvertor(arr, square)
console.log(sqArr)
let cubeArr = ArrayConvertor(arr,cube);
console.log(cubeArr)
