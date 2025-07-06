let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((e) => {
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
});

// a + Math.random() * (b - a) :
// a - initialing value
// b - final value
// Math.random() * (b - a) : generates a random number between a and b
// Math.floor() : rounds down to the nearest integer  (smaller value)
// Math.ciel() : rounds up to the nearest integer (larger value)
// Math.round() : rounds to the nearest integer (nearest value)
// Math.random() : generates a random number between 0 and 1


function getRandomColor(){
    let r = Math.floor(Math.random() *256);
    let g = Math.floor(Math.random() *256);
    let b = Math.floor(Math.random() *256);
    
    return `rgb(${r}, ${g}, ${b})`;
}

