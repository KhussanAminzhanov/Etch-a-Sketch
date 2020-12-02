function putContainer(size) {
    const container = document.createElement("div");
    container.setAttribute("id", "container")

    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.style.width = 960 / size + "px";
            div.style.height = 960 / size + "px";
            div.addEventListener("mouseover", changeColor);
            row.appendChild(div);
        }
        container.appendChild(row);
    }

    document.querySelector("body").appendChild(container);
}

function changeColor(e) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

const button = document.querySelector("button");
button.addEventListener("click", (e) => {
    let size = Number(prompt("Enter the size of the grid: "));
    if (size > 0 && size < 101) {
        let container = document.querySelector("#container");
        document.querySelector("body").removeChild(container);
        putContainer(size);
    }
})

putContainer(16);