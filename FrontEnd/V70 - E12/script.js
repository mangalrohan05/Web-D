let cont = document.getElementById("container");

let colors = {
    0: "red",
    1: "blue",
    2: "green",
    3: "yellow",
    4: "white",
    5: "aqua",
    6: "purple",
}

let ids = Math.floor(Math.random()*7);
console.log(ids);

for (let i = 0; i < 7; i++) {
    cont.children[i].style.backgroundColor = changeColor();
    cont.children[i].style.color = changeColor();
}

function changeColor() {
    let col = Math.floor(Math.random()*7);
    return colors[col];
}