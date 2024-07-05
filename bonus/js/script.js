const grid = document.getElementById("grid")

// recupero il bottone play e gli do la funzione
document.getElementById("play").addEventListener("click", function () {
    // recupero l'elemento grid in cui mettere i quadrati
    let difficulty = document.getElementById("difficulty").value

    if (difficulty == "hard") {
        createSquare(49, "hard")
    } else if (difficulty == "medium") {
        createSquare(81, "medium")
    } else if (difficulty == "easy") {
        createSquare(100, "easy")
    }
})

function createSquare(value, size) {
    for (let i = 0; i < value; i++) {

        let square = document.createElement("div");
        square.classList.add("square", size);
        grid.append(square)

        let content = document.createElement("span");
        square.append(content);
        content.textContent = i + 1;

        changeColor(square, i)
    }
}

function changeColor(square, i) {
    square.addEventListener("click", function () {
        this.classList.toggle("bg-azure")
        console.log("Hai cliccato la", i + 1, "cella")
    })
}