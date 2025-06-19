// Objects

let person ={
    name:"Muskan",
    age:18,
    profession:"developer",
    skills:["soft skills","HTML","solidity"]
}

console.log(person.name)

        //two types of getting a key from objects
console.log(person.profession)
console.log(person["profession"])

//Arithmatics Operators
        //+, -, *, /, **
console.log(Math.pow(2,5))
console.log(2**5)
console.log(Math.sqrt(4))


//Conditional Operators
let a=10
let b="10"
if(a==b)
    console.log(true) //true only checks data

if(a===b)
    console.log(true) //will not console because === checkcs data type

if (a===b || a==b)
    console.log(true) // ||  OR operator so one of them should be true

if(a===b && a==b)
    console.log(true)  // && used so both should be correct will not console anything

if((a===b || a==b) || (a===b && a==b)){ //true will be printed after checking condition
    console.log(true)
}
else{
    console.log(false)
}

if((a===b || a==b) || (a===b && a==b) && (a == b)){ //true will be printed after checking condition
    console.log(true)
}
else{
    console.log(false)
}

// ternary operator

(a === b ? console.log("true statement") : console.log("false statement"))
let result = (a == b ? "true" : "false")
console.log(result)

    // (a==b?(a===b?console.log("a and b both are of same data type")
    // :console.log("a and b both are of different data type"))
    // :console.log("not equal"))
        
// Loops

let arr = [1,2,3,4,5,6,7,8]

for(let element of arr){
    console.log(element)
}
for(let key in arr){
    console.log(key)  // indices will gwt printed
}

let person2 ={
    name:"Muskan",
    age:18,
    profession:"developer",
    skills:["soft skills","HTML","solidity"]
}

// for in loop

for(let key in person2){
    console.log(key)
}

for(let key in person2){
    console.log(key, "-", person[key])
}

