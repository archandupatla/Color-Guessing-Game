let colors = generateColors();
let gameWon = false;
var pickedColor = colors[pickColor(colors.length)];
const resetButton = document.querySelector('#reset');
const squares = document.querySelectorAll('.squares');
const colorDisplay = document.querySelector('#pickedColor');
const message = document.querySelector("#message");
const header = document.querySelector('h1');
colorDisplay.textContent = pickedColor;
resetButton.addEventListener('click', function(){
    resetButton.textContent = "New Colors";
    message.textContent = "";
 colors = generateColors();
 console.log(colors);
 pickedColor = colors[pickColor(colors.length)];
 colorDisplay.textContent = pickedColor;
 header.style.backgroundColor="steelblue";
 for(let i = 0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
 }
})
for(let i = 0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
         if(this.style.backgroundColor === pickedColor){
             message.textContent = "Correct";
             changeColors(pickedColor);
             header.style.backgroundColor = pickedColor;
             gameWon = true;
             resetButton.textContent = "Play Again?"
         }
         else{
            message.textContent = "Try again";
            this.style.backgroundColor = "black" 
         }
    })
}
function changeColors(color){
for(let i = 0; i< squares.length; i++){
    squares[i].style.backgroundColor = color;
}
}
function pickColor(n){
    return Math.floor(Math.random()*n);
}
function generateColors(){
    return ["rgb("+ pickColor(255) + ", " + pickColor(255) + ", " + pickColor(255) + ")" ,
        "rgb("+ pickColor(255) + ", " + pickColor(255) + ", " + pickColor(255) + ")",
        "rgb("+ pickColor(255) + ", " + pickColor(255) + ", " + pickColor(255) + ")",
        "rgb("+ pickColor(255) + ", " + pickColor(255) + ", " + pickColor(255) + ")",
        "rgb("+ pickColor(255) + ", " + pickColor(255) + ", " + pickColor(255) + ")",
        "rgb("+ pickColor(255) + ", " + pickColor(255) + ", " + pickColor(255) + ")"
    ];
}