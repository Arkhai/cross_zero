var numberCells = 5;
var arrayOfCells = [];
var divForCells;
var mainDivForCells = document.querySelector('.cross_zero');

var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var maxWidth = rootStyles.getPropertyValue('--max-width');

function setMaxWidthOfField() {
    root.style.setProperty('--max-width', (50 + numberCells * 100) + 'px');
}

setMaxWidthOfField();

for (var j = 0; j < numberCells; j++) {
    arrayOfCells[j] = [];
    for (var m = 0; m < numberCells; m++) {
        arrayOfCells[j][m] = -1;
        divForCells = document.createElement('div');
        divForCells.classList.add("block");
        //      divForCells.className='block';
        //     divForCells.innerHTML='+';
        mainDivForCells.appendChild(divForCells);
    }
    // console.log(arrayOfCells);
}


var blockToClick = document.querySelectorAll('.block');


for (e = 0; e < blockToClick.length; e++) {
    blockToClick[e].addEventListener('click', blockToClickHandler);
}

var i = 1;

function blockToClickHandler() {
    if (i % 2 == 1) {
        this.innerHTML = "X";
        i = 2;
        this.removeEventListener('click', blockToClickHandler);
    }
    else if (i % 2 == 0) {
        this.innerHTML = "O";
        i = 1;
        this.removeEventListener('click', blockToClickHandler);
    }
}

