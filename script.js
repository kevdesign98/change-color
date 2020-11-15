const btnColor = document.querySelector("#button");
const body = document.querySelector("body");
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'cyan', 'white','black'];

button.addEventListener('click', changeColorBackg);

function changeColorBackg(){
var random = Math.floor(Math.random()*colors.length)  
body.style.backgroundColor = colors[random]
}
