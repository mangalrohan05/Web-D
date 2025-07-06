let n = document.getElementsByClassName("box");

n[3].style.backgroundColor = "red";
n[3].style.color = "white";

document.getElementById("blue").style.backgroundColor = "blue";


document.querySelector(".box").style.backgroundColor = "green";
document.querySelectorAll(".box")[1].style.backgroundColor = "yellow";


document.querySelectorAll(".box").forEach(e => {
    e.style.border = "5px solid black";
});