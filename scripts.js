let i = 0;
let colors = ["black", "red", "green", "orange", "yellow", "purple", "brown",
    "blue", "grey", "lightblue", "lightcyan"
]
const title = document.querySelector("#title");
const manualColor = document.querySelector("#manual");

function colorFunction() {
    function getRandom() {
        let random = Math.random();
        random = random * colors.length - 1;
        random = Math.floor(random);
        return random;
    }
    let currColor = title.style.color;
    let color = getRandom();
    for (let i = color; colors[i] == currColor; i = getRandom()) {
        if (currColor != colors[i]) {
            title.style.setProperty("color", colors[color]);
        }
    }
    title.style.setProperty("color", colors[color]);

}

function sizeFunction() {
    let size = document.querySelector("#textField").value;
    title.style.setProperty("font-size", `${size}px`);

}

function manualChangeColor() {
    i++
    if (i % 2 == 0) {
        manualColor.style.color = "black";
    } else {
        manualColor.style.color = manualColor.dataset.color;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').onclick = colorFunction;
    document.querySelector('form').onsubmit = sizeFunction;
    manualColor.onclick = manualChangeColor;
})