// console.log('Hello World');

// // var a = 5;
// // let b = "hello";
// // // let b = 'world';
// // b = 'world';
// // const c = true;

// // {
// //     // only works for let and const
// //     console.log(b);
// //     let b = 20;
// //     console.log(b);
// // }

// var a = 5;
// {
//    console.log(a);
//     var a = 20;
//     console.log(a); 
// }
// console.log(a);
// const arr = [1, 2, 3, 4, 5];
// arr[1] = 10; //this is updation
// // arr = [6, 7, 8, 9, 10] // this is reassignment and not allowed

// console.log(temp);
// var temp = " this is temp";
// console.log(temp);
// // dead temporal zone in let and const (unless it is assigned a value)
// // console.log(temp2);
// // let temp2 = " this is temp2";
// // console.log(temp2);

// console.log(ar);

// var ar;
// console.log(ar)

// ar = 10;
// console.log(ar); // undefined, undefined, 10


// let arr1 = [10,20,30,"hello",undefined, null, true];
// let twoDArr = [
//     [1,2,3],
//     [2,5,6]
// ];
// console.log(twoDArr);
// console.log(twoDArr[1][2]);
// console.log(arr1[4]);
//arr methods

//add items at beginning
arrr = [1, 2, 3, 4, 5, 6];
// arrr.unshift(50);
arrr.unshift(50,44,55);
console.log(arrr);
//delete item from beginning
arrr.shift();
console.log(arrr);

let aa = [1,2,3,4,5];
// let subArr = aa.slice(2,4);
let subArr = aa.slice(2);
console.log(subArr);

// splice - 3 workings
console.log(aa)
// delete elements from between the array
 aa.splice(3,1); // deletes one element at index 3
 aa.splice(3,3); //deletes 1 element at index 3, three times
console.log(aa);

//add element at index 1 and shift elements forward
aa.splice(1,0,10);
aa.splice(1,0,10,11,12,13);
console.log(aa);

let strAA=aa.toString();
let stAA=aa.join(" ");
console.log(strAA);
console.log(strAA)