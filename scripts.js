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
    document.querySelector('#submit').onkeyup = () => {
        document.querySelector('#submit').disabled = false;
    }
    let size = document.querySelector("#textField").value;

    title.style.setProperty("font-size", `${size}px`);
    const para = document.createElement("p");
    para.innerHTML = `You set the size of the title to ${size} pixels.`;
    document.getElementById("size-change-container").appendChild(para);
    document.querySelector('#textField').value = '';
    document.querySelector('#submit').disabled = true;

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
    localStorage.setItem("bgColor", this.value);
}
function myAnime() {
    const animationDiv = document.querySelector('#animation');
    animationDiv.style.animationPlay = 'paused';
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').onclick = colorFunction;
    // This disables the submit button while the textField is empty
    document.querySelector('#submit').disabled = true;
    document.querySelector('#textField').onkeyup = () => {
        document.querySelector('#submit').disabled = false;
    }
    document.querySelector('form').onsubmit = sizeFunction;
    setInterval(manualChangeColor, 1000);
    //manualColor.onclick = manualChangeColor;
    document.querySelector("body").style.background = localStorage.getItem("bgColor")
    backgroundSelector.onchange = backgroundChanger;

})