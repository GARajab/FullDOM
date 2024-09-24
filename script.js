// nameOne is the variable that storing the selected document from html page and it is called cashed element reference benifit is to increase the speed of script
const nameOne = document.querySelector("#nameOfMoh") 
// this used to verify that the selector is selected correctly, will use it alot to verify and other tasks
console.dir(nameOne)

const paragraphElemnt = document.querySelector(".cool")
console.dir(paragraphElemnt)

// here we can style the document after select it using dot-notation and style (element (nameOne or paragraphElement).style.color = "red")
paragraphElemnt.style.color = "red"
paragraphElemnt.style.background = "black"
paragraphElemnt.style.fontSize = "37px"
paragraphElemnt.style.textAlign = "center"

// we can also change the content of the selected element by using the code in line 16
paragraphElemnt.textContent = "Center"
// we can use it as a condition also
if (paragraphElemnt.textContent !== "Center"){
paragraphElemnt.textContent = "Centeralaized"
}

// now we will add new h2 to the index.html page using js code like the steps below:

// 1- select body and save it in bodyElement
const bodyElement = document.querySelector("body")

// 2- creat element "h2" and save it in h2Element
const h2Element = document.createElement("h2")

// 3- insert a text inside h2Element like in html((<h2>Hi Iam From JS File</h2>))
h2Element.textContent = "Hi Iam From JS File"

// 4- now it is the time to append the index.html page using function appendChild like below
bodyElement.appendChild(h2Element)

// we want to select the #comments element with variable commentElements
const commentElements = document.querySelectorAll("#comments")

// here will loop throught it using forEach method (because it is seen as array by js) and try to change the font size to 30px
commentElements.forEach((commintElement)=>{

    commintElement.style.fontSize = "30px"

})

// selecting button by type
const btnElement = document.querySelector("button")

// remove disabled attrebute
btnElement.removeAttribute("disabled")

// set id to submit
btnElement.setAttribute("id", "submit")

// add class btn to the button class
btnElement.classList.add("btn")

// remove class btn to the button class
btnElement.classList.remove("btn")

// add class = "action-button"
btnElement.classList.add("action-button")

// replace the btn class and make it action-button
btnElement.classList.replace("btn", "action-button")



