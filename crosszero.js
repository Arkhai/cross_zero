// JavaScript source code
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

