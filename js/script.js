// recupero il bottone play e gli do la funzione

document.getElementById("play").addEventListener("click", function () {
    // recupero l'elemento grid in cui mettere i quadrati
    const grid = document.getElementById("grid")

    // ciclo for per generare tot quadrati
    for (let i = 0; i < 100; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        grid.append(square)
        let content = document.createElement("span");
        square.append(content);
        content.textContent = i + 1;
    }
})