// // let num = 10;

// // setTimeout(()=>{
// //     console.log("This comes after 2s")
// // },2000) // runs the callback function after 2000ms(2sec)

// // const callBack = () =>{
// //     console.log("This is outer callback function")
// // }

// // setTimeout(callBack,1000) // runs the callback function after 1000ms(1sec)

// // // setInterval

// // const id = setInterval(()=>{
// //     console.log("This function is running in every three seconds")
// // },3000)

// // setTimeout(()=>{
// //     clearInterval(id);
// // }, 3000*4)
// // clearInterval(id); // not appropriate because it will clear


// // promises 
// const myPromise = new Promise((resolve,reject)=>{
//     let num = Math.random()*10
//     if(num<5){
//         resolve(num)
//     }
//     else{
//         reject(num)
//     }
// })
// // console.log(myPromise) // wrong way
// let b= 10;
// myPromise.then((data)=>{
//     console.log("Promise resolved",data)
// }).catch((error)=>{
//     console.log("promise rejected",error)
// });
// console.log(b) // this is because the promise is asynchronous, it will not block the execution of the code

// const newMyPromise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("This is a promise which is resolved after 2s")
//         resolve()
//     }, 2000);
// })

// console.log(newMyPromise)

// newMyPromise.then(()=>{
//     console.log("Promise resolved")
// })

// const chainPromise = new Promise((resolve,reject)=>{
//     let num = Math.random()*100
//     if(num<50){
//         resolve(num)
//     }
//     else{
//         reject(num)
//     }
// })

// chainPromise.then((data)=>{
//     if(data<25){
//         return `num is less than 25 ${data}`
//     }
//     else{
//         return `num is greater than 25 ${data}`
//     }
// }).then((dta)=>{
//     console.log(dta)
// }).catch(()=>{
//     console.log("object")
// })



// async functions 
let a = 10;
async function fun(){
    console.log("Async function");
}

const arrowFun = async () =>{
    console.log("Async arrow function");
    // let res = await fetch('https://v2.jokeapi.dev/joke/Any')
    // result =await res.json();

    let res = await axios.get("https://v2.jokeapi.dev/joke/Any")
    result = res.data;
    console.log(result)
    console.log("async arrow function end")

}

fun();
arrowFun();
console.log(a)
