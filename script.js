const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");
const savedList = document.querySelector("ul");
const deleteAll = document.getElementById("deleteAll")
let array = []
let div


function createNew (m, index) {
    div = document.createElement("div");
    let li = document.createElement("li");
    let div2 = document.createElement("div");
    let p = document.createElement("p");
    let btn = document.createElement("button");

    p.innerText = m
    btn.innerText = "Remove"
    btn.setAttribute("id", index)
    btn.addEventListener("click", remove)
    btn.classList.add("remove")

    div2.appendChild(p);
    div2.appendChild(btn);

    li.appendChild(div2);

    div.appendChild(li);
    
    console.log(div)
}



const saveInput = () => {
    let userInput = input.value.trim()
    if (!userInput) return
    else {
        array.push(userInput);
        input.value = ""
        console.log(array, userInput.length, userInput);

        createNew(userInput, array.length-1)
        
        savedList.appendChild(div);
    }
}

const saveLink = () => {
    console.log("Save Link");
}

function remove () {
    console.log(this.parentElement.parentElement.remove())
    console.log(array, this.id, this.id-1)
}

function removeAll () {
    savedList.innerHTML = ""
    array = []
    console.log(array)
}

buttons.forEach(x => {
    if (x.id === "inputSave") {
        x.addEventListener("click", saveInput)
    } else if (x.id === "linkSave") {
        x.addEventListener("click", saveLink)
    } else if (x.id === "deleteAll") {
        x.addEventListener("click", removeAll)
    }  
})

