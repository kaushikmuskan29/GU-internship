localStorage.setItem("name", "muskan")
console.log(localStorage.getItem("name"))

const obj ={
    name:"Muskan",
    arr:[1,2,3,"4"]
}

// console.log(JSON.stringify(obj));
localStorage.setItem("obj", JSON.stringify(obj));
console.log("Storage - ", localStorage.getItem("obj"))
let StoredObj = JSON.parse(localStorage.getItem("obj"))
console.log(StoredObj)

// for removing particular

// localStorage.removeItem("name")

// using clear - we can clear the storage of a particular domain

// localStorage.clear()
