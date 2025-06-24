const h1 = document.querySelector("h1")

h1.addEventListener("click", (e) => {
    console.log(e)
    console.log(e.target)
    h1.classList.toggle("background")
    console.log("h1 clicked")
})

// h1.addEventListener("click", (e) => {
//     console.log(e.target)  return element at which the event occur
//     h1.classList.toggle("background")
// })

// event bubling 
const input = document.getElementById("textinp")

h1.children[0].addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("span clicked");
    input.value = ""
})


input.addEventListener("change", (e)=>{
    console.log(input.value)
    console.log(e.target.value)
})
