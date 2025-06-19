// functions

// function can return anything and function do not have any datatype
function fun(){
    console.log("object");
    // return 5;
}
 // console.log(fun())

let resultt = fun()
console.log(resultt)

function fun2(){
    return 10+20;
}
console.log(fun2());

function sum(a,b){
    return a+b;
}
// let ans = sum(100,400);
let ans = sum(a = 100,b = 400);
console.log(ans)

// default arguments

function fun3(a,b,c=0){
    return a+b+c;
}
let res = fun3(1,2,5);
console.log(res);

// There'ssometjing like anonymous function

function fun4(){
    return{
        name: "hello",
        work: "nothing"
    }
}
console.log(fun4())


// arrow function
let arrowFun = () => {
    console.log("This is arrow function")
    return "return from arrow function"
}

let arrowres = arrowFun();
console.log(arrowres);

let arrowFun2 = (a,b) => {
    console.log("This is arrow function")
    return a+b
}
console.log(arrowFun2(2,3));

function fun5(a,b){
    return a+b;
}
function fun5(a,b,c){
    return a+b+c; 
}
function fun5(a,b,c,d){
    return a+b+c+d;
}

res = fun5(2,3,4,5)
res = fun5(2,3,4) // nothing like overridig..the last dunction will get called
console.log(res)  
