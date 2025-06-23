// const allParagraphs = document.getElementsByTagName("p")
// console.log(allParagraphs)
// console.log(allParagraphs[1])

// const classParagraph = document.getElementsByClassName("para");
// console.log(classParagraph)

// const singleElment = document.getElementById("head2");
// console.log(singleElment)

// const elementByQuery = document.querySelector("p")
// const eleByQuery = document.querySelector(".para2")
// const elementByQue = document.querySelector("#head2")
// console.log(elementByQuery, eleByQuery,elementByQue)

// const elementsByQuery = document.querySelectorAll(".para2")
// console.log(elementsByQuery)

const container = document.getElementById("container")
// console.log(container.innerText)
// console.log(container.textContent)
// console.log(container.innerHTML)
// // container.innerText = "This is changed by <h1>JS</h1>"
// // container.innerHTML = "This is changed by <h1>JS</h1>"

// console.log(container.id, container.className)
// container.className = "background"
// container.setAttribute("id", "containerByJS")
// console.log(container.id)

// const conatiner2 = document.getElementById("containerByJS")

// elementByQuery.classList.add("cl5")
// elementByQuery.classList.remove("cl3")
// elementByQuery.classList.toggle("cl6") //will add and remove - if present then it will remove and vice-versa

// console.log(elementByQuery.classList);
// console.log(container.children)
// console.log(container.childNodes) // will count all the children including next line as text
// console.log(container.children[1].parentElement)
// console.log(container.children[1].nextElementSibling)
// console.log(container.children[1].nextSibling)

// // nextSibling (returns text) and nextElementSibling(next element)

// container.children[1].nextElementSibling.innerText ="This one is changed"

const div = document.createElement("div"); //create element
const val = "helllllllllooooooooooooooo";
div.className = "cl1 cl2";
div.id = "dynamicContainer";
div.innerHTML = `<p>${val} </p> <p>${val} 2</p>`
container.append(div)
container.prepend(div)

container.after(div)
container.before(div)
console.log(div)

