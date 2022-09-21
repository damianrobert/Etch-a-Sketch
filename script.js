const sketchZone = document.querySelector('.sketch-zone')
const clear = document.getElementById('clear')
const sizeInput = document.getElementById('size')
const colorInput = document.getElementById('color-picker')
let mode = document.querySelector('.mode')

let color =  colorInput.value
let amount
let click = true

function populateBoard(size){
   sketchZone.style.gridTemplateColumns = `repeat(${size}, 1fr)`
   sketchZone.style.gridTemplateRows = `repeat(${size}, 1fr)`

   let squares = sketchZone.querySelectorAll('div')
   squares.forEach(div => div.remove())

   
   
   amount = size * size;

   for(let i = 0; i < amount; i++){
    let square = document.createElement('div')
    square.setAttribute('id', 'colored')
    sketchZone.appendChild(square)
    square.addEventListener('mouseover', colorBoard);
    square.style.backgroundColor = 'white'
   }

   
}

populateBoard(16)

function changeSize(input){
    if(input >= 2 && input <= 100){
    populateBoard(input)
    } else {
        alert('The size must be between 2 and 100')
    }
}

function colorBoard(){
    if(click){
    this.style.backgroundColor = color
    }
}

function clearBoard(){
    let sketchZone = document.querySelector('.sketch-zone')
    let squares = sketchZone.querySelectorAll('div')
    squares.forEach((div) => div.style.backgroundColor = 'white')
}


document.querySelector('body').addEventListener('click', () => {
    click = !click

    if(click){
        mode.textContent = "coloring mode"
       }else{
        mode.textContent = "not coloring mode"
       }
})