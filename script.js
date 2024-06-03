let rows = 16;

let gridSize = document.querySelector("#sqps");
const reset = document.querySelector("#reset");
const container = document.querySelector(".container");

let createGrid = () => {
    for (let row = 1; row <= rows; row++)
    {
        let createRow = document.createElement("div");
        createRow.className = "row";
        container.appendChild(createRow);

        for (let column = 1; column <= rows; column++)
        {
            let createColumn = document.createElement("div");
            createColumn.className = "grids";
            createRow.appendChild(createColumn);
        }
    }
}

const userInput = () => {
    rows = prompt("Number of squares per side: ");
    while (rows > 100)
    {
        alert("Enter a number less than 101!");
        rows = prompt("Number of squares per side (less than 100): ");
    }
    while (rows < 1)
    {
        alert("Enter a number greater than 0!");
        rows = prompt("Number of squares per side (greater than 0): ");
    }
    return rows;
}

function finalGrid(userInput()) {
    createGrid;
}

gridSize.addEventListener("click", finalGrid);



