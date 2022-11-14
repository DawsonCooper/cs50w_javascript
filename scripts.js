let i = 0;
let colors = ["black", "red", "green", "orange", "yellow", "purple", "brown",
    "blue", "grey", "lightblue", "lightcyan"
]
const title = document.querySelector("#title");
const manualColor = document.querySelector("#manual");
const backgroundSelector = document.querySelector("#background")

function colorFunction() {
    function getRandom() {
        let random = Math.random();
        random = random * colors.length - 1;
        random = Math.floor(random);
        return random;
    }
    let currColor = window.getComputedStyle(document.querySelector("#title")).color;
    let color = getRandom();
    console.log(currColor);
    title.style.setProperty("color", colors[color]);

}

function sizeFunction() {
    let size = document.querySelector("#textField").value;
    title.style.setProperty("font-size", `${size}px`);
    return false;

}

function manualChangeColor() {
    i++
    if (i % 2 == 0) {
        manualColor.style.color = "black";
    } else {
        manualColor.style.color = manualColor.dataset.color;
    }
}

function backgroundChanger() {
    document.querySelector("body").style.background = this.value;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').onclick = colorFunction;
    document.querySelector('form').onsubmit = sizeFunction;
    manualColor.onclick = manualChangeColor;
    backgroundSelector.onchange = backgroundChanger;
})