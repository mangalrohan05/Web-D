// let cont = document.body.firstElementChild;

// let boxes = document.getElementsByClassName("box");
// boxes.style.backgroundColor = "Blue";
// cont.style.backgroundColor = "red";
// let box = cont.firstElementChild;

document.body.firstChild //text
document.body.firstElementChild //container

document.body.firstElementChild.childNodes //gives list of all nodes under container
document.body.firstElementChild.children //gives elemtents (here divs) under container

document.body.firstElementChild.children[2] //gives box3
document.body.firstElementChild.children[2].nextElementSibling //gives box4
document.body.firstElementChild.children[2].nextSibling //gives text node (whitespace)
document.body.firstElementChild.children[2].previousElementSibling //gives box2

document.body.firstElementChild.children[2].parentElement //gives container

document.body.firstElementChild.children[2].parentElement.parentElement //gives body

document.body.firstElementChild.children[2].parentElement.parentElement.parentElement //gives html

document.body.firstElementChild.children[2].parentElement.parentElement.parentElement.parentElement //gives document



// Table:
let tb = document.body.children[1];

tb.rows //gives all rows in table
tb.columns //gives all columns in table
tb.rows[0].cells //gives all cells in first row
tb.captions //gives caption of table
tb.tHead //gives thead of table
tb.tFoot //gives tfoot of table
tb.tBodies //gives tbody of table