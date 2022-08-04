const mainContainer = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    mainContainer.appendChild(squareDiv);
    squareDiv.addEventListener("mouseover", () => {
        squareDiv.style.backgroundColor = "#4b6ece";
    })
}

