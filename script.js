const sketchZone = document.querySelector('.sketch-zone')
const smallBttn = document.querySelector('#small')
const mediumBttn = document.querySelector('#medium')
const bigBttn = document.querySelector('#big')
const sizeInput = document.getElementById('size')

let amount

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