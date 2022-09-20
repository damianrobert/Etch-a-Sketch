const sketchZone = document.querySelector('.sketch-zone')
const smallBttn = document.querySelector('#small')
const mediumBttn = document.querySelector('#medium')
const bigBttn = document.querySelector('#big')

function smallTable(){
    for(let x = 0; x < 456; x++){
     const pixel = document.createElement('div')
     pixel.setAttribute('id', 'smallPixels')
     sketchZone.appendChild(pixel);
    }
}

function mediumTable(){
    for(let y = 0; y < 1024; y++){
        const pixel = document.createElement('div')
        pixel.setAttribute('id', 'mediumPixels')
        sketchZone.appendChild(pixel);
       }
}

function bigTable(){
   for(let i = 0; i < 4596; i++){
    const pixel = document.createElement('div')
    pixel.setAttribute('id', 'bigPixels')
    sketchZone.appendChild(pixel);
   }
}

smallBttn.addEventListener('click', smallTable);
mediumBttn.addEventListener('click', mediumTable);
bigBttn.addEventListener('click', bigTable);
