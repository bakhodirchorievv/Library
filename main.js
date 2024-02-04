let addBook = document.querySelector(".add-book")
let mainDiv = document.querySelector(".main-div")
let cancelBtn = document.querySelector(".cancelBtn")
let submitBtn = document.querySelector(".submitBtn")
let wrapper = document.querySelector(".wrapper")
let titleInput = document.querySelector(".first")
let authorInput = document.querySelector(".second")
let pagesInput = document.querySelector(".third")
let checkbox = document.querySelector(".checkbox-input")
let overlay = document.querySelector(".overlay")
let searchInput = document.querySelector(".search-input")
let searchInput2 = document.querySelector(".search-input2")


let BOOKS = JSON.parse(localStorage.getItem("BOOKS")) || []

function updateLocalStorage() {
    localStorage.setItem("BOOKS", JSON.stringify(BOOKS))
}

searchInput.addEventListener("input", () => {
    let filteredBooks = BOOKS.filter(book => book.author.toLowerCase().includes(searchInput.value.toLowerCase()))
    saveOnStorage(filteredBooks)
})
searchInput2.addEventListener("input", () => {
    let filteredBooks = BOOKS.filter(book => book.title.toLowerCase().includes(searchInput2.value.toLowerCase()))
    saveOnStorage(filteredBooks)
})

function saveOnStorage(filteredBooks) {
    wrapper.innerHTML = ""

    let booksToDisplay = filteredBooks || BOOKS

    booksToDisplay.forEach((book) => {
        let newDiv = document.createElement("div")
        wrapper.append(newDiv)
        newDiv.className = "table"
    
        let newH2 = document.createElement("h2")
        newDiv.append(newH2)
        newH2.className = "table-title"
        newH2.textContent = `"${book.title}"`
        let firstNewP = document.createElement("p")
        newDiv.append(firstNewP)
        firstNewP.className = "author"
        firstNewP.textContent = book.author
        let secondNewP = document.createElement("p")
        newDiv.append(secondNewP)
        secondNewP.className = "pages"
        secondNewP.textContent = book.pages
        let newButton = document.createElement("button")
        newDiv.append(newButton)
        if (book.isRead) {
            newButton.className = "table-btn read"
            newButton.textContent = "Read"
        } else {
            newButton.className = "table-btn not-read"
            newButton.textContent = "Not Read"
        }
        let newButton2 = document.createElement("button")
        newDiv.append(newButton2)
        newButton2.className = "table-btn remove"
        newButton2.textContent = "Remove"
    
        newButton2.addEventListener("click", (event) => {
            if(!confirm("Do you want to delete the book?")) return;
            let remove = event.target.parentElement
            wrapper.removeChild(remove)
            const indexToRemove = BOOKS.findIndex(b => b === book)
            BOOKS.splice(indexToRemove, 1)
            updateLocalStorage()
        });
    
        newButton.addEventListener("click", () => {
            newButton.classList.toggle("not-read")
            newButton.classList.toggle("read")
            if (newButton.innerText == "Read") {
                newButton.textContent = "Not Read"
                book.isRead = false;
            } else {
                newButton.textContent = "Read"
                book.isRead = true;
            }
            updateLocalStorage()
        })
    })
}

addBook.addEventListener("click", function () {
    mainDiv.classList.add("add-to-main-div")
    overlay.style.display = "block"
});

cancelBtn.addEventListener("click", () => {
    mainDiv.classList.remove("add-to-main-div")
    overlay.style.display = "none"
});

submitBtn.addEventListener("click", () => {
    if (checkbox.checked && titleInput.value && pagesInput.value && authorInput.value) {
        BOOKS.push({
            title: titleInput.value,
            author: authorInput.value,
            pages: pagesInput.value,
            isRead: true
        });

        mainDiv.classList.remove("add-to-main-div")
        overlay.style.display = "none"
    
        titleInput.value = ""
        authorInput.value = ""
        pagesInput.value = ""
        checkbox.checked = false

        updateLocalStorage()
        saveOnStorage()

    } else if (titleInput.value && pagesInput.value && authorInput.value) {
        BOOKS.push({
            title: titleInput.value,
            author: authorInput.value,
            pages: pagesInput.value,
            isRead: false
        });

        mainDiv.classList.remove("add-to-main-div")
        overlay.style.display = "none"
    
        titleInput.value = ""
        authorInput.value = ""
        pagesInput.value = ""

        updateLocalStorage()
        saveOnStorage()
    }

});

saveOnStorage()