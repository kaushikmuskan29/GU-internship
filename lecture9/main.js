let arr = [
    {
        name: "person 1",
        age: 20,
    },
    {
        name: "person 2",
        age: 18,
    },
    {
        name: "person 3",
        age: 13,
    },
    {
        name: "person 4",
        age: 24,
    },
    {
        name: "person 5",
        age: 15,
    }
]

// add a new key "id" & its value to every object

// spread operator - to copy object/array values to new object/array

let person = {
    name:"person",
    age:24,
    skills : ["js","react"]
}

let newPerson = {
    ...person,
    profession: "dev",
    home:"panipat"
}
console.log(newPerson)

let numArr = [1,2,3,4,5,6]
let newNumArr = [...numArr,7,8,9,10];
console.log(newNumArr)

arr = arr.map((obj, index) => {
    return{
        ...obj,
        // name: "changed name", // overwrite old key's value
        id:index+1, // new kwy and its value
        salary: (index+1)*100000
    }
})
console.log(arr)

let newArr = arr.filter((person)=>{
    return (person.age >= 18);
})
console.log(newArr)

let salarySum = arr.reduce((accum,person)=>{
    return accum+person.salary;
},0)
console.log(salarySum)
let ar = [1,2,3,4,5,6,7]
let sum = ar.reduce((accum, num)=>{
    return num+accum
}, 0)
console.log(sum)

let multiply = ar.reduce((accum,num)=>{
    return num*accum
}, 1)
console.log(multiply)



// find - just like filter but only returns 1st matching element

let result = arr.find((person)=>{
    return (person.age < 18)
})
console.log(result)

// forEach

ar.forEach(element =>{
    console.log(element)
})