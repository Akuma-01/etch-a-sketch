const container = document.querySelector(".container");
let newGridButton = document.querySelector("#sqps");
const reset = document.querySelector("#reset");

let randomNum = () => {
    return Math.floor(Math.random() * 256);
}

let randomColor = () => {
    return `rgb( ${randomNum()}, ${randomNum()}, ${randomNum()} )`;
}

let grids = (row) => {
    for (let i = 1; i <= row; i++)
    {
        let createRow = document.createElement("div");
        createRow.className = "row";
        container.appendChild(createRow);

        for (let j = 1; j <= row; j++)
        {
            let grids = document.createElement("div");
            grids.className = "grids";
            grids.setAttribute( "style", "background-color: white");
            createRow.appendChild(grids);   
        }
    }
}

let userInput = () => {
    rows = prompt("Number of squares per side: ");
    if (rows == '')
    {
        alert("Reclick Size, if you want to set size!");
        return 16;
    }
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

newGridButton.addEventListener("click", () => {
    container.replaceChildren();
    grids(userInput());
});

container.addEventListener("mouseover", (event) => {
    let target = event.target;
    target.style.backgroundColor = randomColor(); 
})

reset.addEventListener("click", () => {
    container.replaceChildren();
    grids(16);
})

grids(16);






