let button = document.getElementById("btn");

// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// single click event
button.addEventListener("click", () => {
    document.querySelector(".box").innerHTML = "<b>Button Clicked!</b>";
});

// double click event
button.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = "<b>New Button Clicked!</b>";
});

// right click event
button.addEventListener("contextmenu", () => {
    document.querySelector(".box").innerHTML = "<b>Right Clicked!</b>";
});

// mouse over event
button.addEventListener("mousedown", () => {
    document.querySelector(".box").innerHTML = "<b>Mouse Down!</b>";
});

// mouse out event
button.addEventListener("mouseup", () => {
    document.querySelector(".box").innerHTML = "<b>Mouse Up!</b>";
});


document.addEventListener("keydown", (e) => {
    console.log("Key pressed: " + e.key);
});