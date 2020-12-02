const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
    let row = document.createElement('div');
    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.classList.add('box');
        div.addEventListener("mouseenter", changeColor);
        row.appendChild(div);
    }
    container.appendChild(row);
}

function changeColor(e) {
    e.target.style.backgroundColor = '#000';
}