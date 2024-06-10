const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");
const savedList = document.querySelector("ul");
const deleteAll = document.getElementById("deleteAll")
let array = []
let arrayFromLocalS = JSON.parse(localStorage.getItem("items"))
let div

if (arrayFromLocalS) {
    array = arrayFromLocalS
    array.forEach((item, index) => {
        createNew(item, index)
        savedList.appendChild(div);
    })
}

function createNew (m, index) {
    div = document.createElement("div");
    let li = document.createElement("li");
    let div2 = document.createElement("div");
    let p = document.createElement("p");
    let btn = document.createElement("button");
    let a = document.createElement("a");

    p.innerText = m;
    a.setAttribute("href", `${input.value}` + m);
    a.setAttribute("target", "_blank");
    btn.innerText = "Remove"
    btn.setAttribute("id", index)
    btn.addEventListener("click", remove)
    btn.classList.add("remove")

    a.appendChild(p);

    div2.appendChild(a);
    div2.appendChild(btn);

    li.appendChild(div2);

    div.appendChild(li);
    
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
    localStorage.setItem("items", JSON.stringify(array))
    console.log(div)
}

const saveLink = () => {
    console.log("Save Link");
}

function remove () {
    this.parentElement.parentElement.remove()
    let text = this.parentElement.children[0].innerText
    array = array.filter(x => x!== text)
    localStorage.setItem("items", JSON.stringify(array))
    // console.log(array, this.id, this.id-1)
}

function removeAll () {
    savedList.innerHTML = ""
    array = []
    localStorage.removeItem("items")
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

