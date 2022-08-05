const gridContainer = document.querySelector(".grid-container");
const btnGridSize = document.querySelector(".btn-grid-size");
const errorMessage = document.querySelector(".error-message");

function resetCells() {
    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell => {
        cell.remove();
    })
}

btnGridSize.addEventListener("click", () => {
    const gridSize = parseInt(prompt("Grid size: Set a value between 1 and 100"));
    if (gridSize >= 1 && gridSize <= 100) {
        resetCells();
        makeGrid(gridSize, gridSize);
    } else {
        resetCells();
        makeGrid(16,16);
        errorMessage.style.display = "flex";
    }
})

// Generate random color from an array
function generateRandomColor () {
    const colorOptions = ["red", "blue", "yellow", "orange"];
    return colorOptions[Math.floor(Math.random() * colorOptions.length)];
}

// Make grid
function makeGrid (rows, cols) {
    gridContainer.style.setProperty("--grid-rows", rows);
    gridContainer.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        gridContainer.appendChild(cell);
        cell.addEventListener("mouseover", () => {
            if (cell.style.backgroundColor === "") {
                cell.style.backgroundColor = generateRandomColor();
                cell.style.opacity = "0.2";
            }
            if ((cell.style.backgroundColor !== "") && (cell.style.opacity <= "0.9")) {
                cell.style.opacity = parseFloat(cell.style.opacity) + 0.2;
            }   
        })
      };
}

makeGrid(16, 16);