const grid = document.getElementById("grid")

// recupero il bottone play e gli do la funzione
document.getElementById("play").addEventListener("click", function () {
    // recupero l'elemento grid in cui mettere i quadrati
    let difficulty = document.getElementById("difficulty").value
    grid.innerHTML = ""
    let squares_num = 0
    if (difficulty == "hard") {
        squares_num = 49
        size = "hard"
    } else if (difficulty == "medium") {
        squares_num = 81
        size = "medium"
    } else if (difficulty == "easy") {
        squares_num = 100
        size = "easy"
    }

    for (let i = 0; i < squares_num; i++) {
        let square = createSquare(i, size)
        grid.append(square)
        changeColorEvent(square, i)
    }
})



function createSquare(text, size) {
    let element = document.createElement("div");
    element.classList.add("square", size);

    let content = document.createElement("span");
    element.append(content);
    content.textContent = text + 1;

    return element
}

function changeColorEvent(square, i) {
    square.addEventListener("click", function () {
        this.classList.toggle("bg-azure")
        console.log("Hai cliccato la", i + 1, "cella")
    })
}