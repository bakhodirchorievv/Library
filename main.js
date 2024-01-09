let addBook = document.querySelector(".add-book")
let mainDiv = document.querySelector(".main-div")
let cancelBtn = document.querySelector(".cancelBtn")
let body = document.querySelector("body")
let submitBtn = document.querySelector(".submitBtn")
let wrapper = document.querySelector(".wrapper")
let titleInput = document.querySelector(".first")
let authorInput = document.querySelector(".second")
let pagesInput = document.querySelector(".third")
let checkbox = document.querySelector(".checkbox-input")
let header = document.querySelector(".header")

addBook.addEventListener("click", function() {
    mainDiv.classList.add("add-to-main-div")
    body.classList.add("add-to-body")
    header.classList.add("add-to-header")
})

cancelBtn.addEventListener("click", ()=> {
    mainDiv.classList.remove("add-to-main-div")
    body.classList.remove("add-to-body")
    header.classList.remove("add-to-header")
    titleInput.value = ""
    authorInput.value = ""
    pagesInput.value = ""
})

submitBtn.addEventListener("click", ()=> {
    if (checkbox.checked && titleInput.value && pagesInput.value && authorInput.value) {
    let newDiv = document.createElement("div")
    wrapper.append(newDiv)
    newDiv.className = "table"

    let newH2 = document.createElement("h2")
    newDiv.append(newH2)
    newH2.className = "table-title"
    let quote = `"`
    newH2.textContent = quote.concat(titleInput.value + `"`) 
    let firstNewP = document.createElement("p")
    newDiv.append(firstNewP)
    firstNewP.className = "author"
    firstNewP.textContent = authorInput.value
    let secondNewP = document.createElement("p")
    newDiv.append(secondNewP)
    secondNewP.className = "pages"
    secondNewP.textContent = pagesInput.value
    let newButton = document.createElement("button")
    newDiv.append(newButton)
    newButton.className = "table-btn read"
    newButton.textContent = "Read"
    let newButton2 = document.createElement("button")
    newDiv.append(newButton2)
    newButton2.className = "table-btn remove"
    newButton2.textContent = "Remove"

    mainDiv.classList.remove("add-to-main-div")
    body.classList.remove("add-to-body")
    header.classList.remove("add-to-header")

    titleInput.value = ""
    authorInput.value = ""
    pagesInput.value = ""

    checkbox.checked = false

    newButton2.addEventListener("click", (event)=> {
        let remove = event.target.parentElement
        wrapper.removeChild(remove)
    })

    newButton.addEventListener("click", ()=> {
        newButton.classList.toggle("not-read")
        if (newButton.innerText == "Read") {
        newButton.textContent = "Not Read"
        } else {
            newButton.textContent = "Read"
        }
    })

    addBook.addEventListener("click", function() {
        mainDiv.classList.add("add-to-main-div")
        body.classList.add("add-to-body")
        header.classList.add("add-to-header")
        newDiv.style.filter = "brightness(0.6)"
    })
    cancelBtn.addEventListener("click", ()=> {
        mainDiv.classList.remove("add-to-main-div")
        body.classList.remove("add-to-body")
        header.classList.remove("add-to-header")
        newDiv.style.filter = "brightness(1)"
    })
    submitBtn.addEventListener("click", ()=> {
        newDiv.style.filter = "brightness(1)"
    })

    } else if (titleInput.value && pagesInput.value && authorInput.value) {
    let newDiv = document.createElement("div")
    wrapper.append(newDiv)
    newDiv.className = "table"

    let newH2 = document.createElement("h2")
    newDiv.append(newH2)
    newH2.className = "table-title"
    let quote = `"`
    newH2.textContent = quote.concat(titleInput.value + `"`)
    let firstNewP = document.createElement("p")
    newDiv.append(firstNewP)
    firstNewP.className = "author"
    firstNewP.textContent = authorInput.value
    let secondNewP = document.createElement("p")
    newDiv.append(secondNewP)
    secondNewP.className = "pages"
    secondNewP.textContent = pagesInput.value
    let newButton = document.createElement("button")
    newDiv.append(newButton)
    newButton.className = "table-btn not-read"
    newButton.textContent = "Not Read"
    let newButton2 = document.createElement("button")
    newDiv.append(newButton2)
    newButton2.className = "table-btn remove"
    newButton2.textContent = "Remove"

    mainDiv.classList.remove("add-to-main-div")
    body.classList.remove("add-to-body")
    header.classList.remove("add-to-header")

    titleInput.value = ""
    authorInput.value = ""
    pagesInput.value = ""

    newButton2.addEventListener("click", (event)=> {
        let remove = event.target.parentElement
        wrapper.removeChild(remove)
    })

    newButton.addEventListener("click", ()=> {
        newButton.classList.toggle("read")
        if (newButton.innerText == "Not Read") {
            newButton.textContent = "Read"
            newButton.style.backgroundColor = "lime"
            newButton.style.color = "black"
        } else {
            newButton.textContent = "Not Read"
            newButton.style.backgroundColor = "red"
            newButton.style.color = "white"
        }
    })

    addBook.addEventListener("click", function() {
        mainDiv.classList.add("add-to-main-div")
        body.classList.add("add-to-body")
        header.classList.add("add-to-header")
        newDiv.style.filter = "brightness(0.6)"
    })
    cancelBtn.addEventListener("click", ()=> {
        mainDiv.classList.remove("add-to-main-div")
        body.classList.remove("add-to-body")
        header.classList.remove("add-to-header")
        newDiv.style.filter = "brightness(1)"
    })

    submitBtn.addEventListener("click", ()=> {
        newDiv.style.filter = "brightness(1)"
    })

    }
})
