
const container = document.querySelector(".container");

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