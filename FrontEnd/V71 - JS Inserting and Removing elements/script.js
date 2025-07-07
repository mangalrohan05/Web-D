let datain = document.querySelector(".box").innerHTML;
let datatxt = document.querySelector(".box").innerText;

let divtag = document.querySelector(".box").tagName // returns "DIV"
let divclass = document.querySelector(".box").className; // returns "box"

let divhidden = document.querySelector(".box").hidden; // returns false

document.querySelector(".box").hidden = true; // hides the element
document.querySelector(".box").hidden = false; // unhides the element

document.querySelector(".box").hasAttribute("style"); // returns true if the element has a style attribute
document.querySelector(".box").setAttribute("style", "color: red;"); // sets the style attribute
document.querySelector(".box").removeAttribute("style"); // removes the style attribute

document.querySelector(".box").remove(); // removes the element from the DOM
document.querySelector(".box").innerHTML = "<h1>New Content</h1>"; // replaces the inner HTML of the element


document.designMode = "on"; // enables design mode, allowing you to edit the page content directly in the browser
document.querySelector(".box").contentEditable = true; // makes the element editable
document.querySelector(".box").focus(); // sets focus on the element
document.querySelector(".box").blur(); // removes focus from the element

// MORE FROM V-71
