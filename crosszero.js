var numberCells;
var arrayOfCells = [];
var divForCells;
var mainDivForCells = document.querySelector('.cross_zero');

//Получение ширины основного дива в зависимости от размера поля
var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var maxWidth = rootStyles.getPropertyValue('--max-width');

//Получаем кнопки выбора размеров поля
var chooseSizeOfField = document.querySelectorAll(".size");

//Добавление обработчика событий на кнопки выбора поля
 for(p = 0; p < chooseSizeOfField.length; p++){ 
    chooseSizeOfField[p].addEventListener('click', setSizeOfFiled);  
}

//Задание ширины основного дива и переменной количества ячеек
function setSizeOfFiled(){  
    if(arrayOfCells.length > 0){
     arrayOfCells.length = 0;
     }
  if(this.id == "3"){
    numberCells = 3; 
  } 
  if (this.id == "4"){
    numberCells = 4; 
  } 
  if (this.id == "5"){
    numberCells = 5; 
  }
  setMaxWidthOfField();
}

var blockToClick;
//Создание поля, в зависимости от выбранного размера, создается двумерный массив и дивы, перед созданием проверяется, нет ли уже созданного поля, если есть, все стирается, создается заново. Навешивается обработчик клика.
function setMaxWidthOfField(){
   blockToClick = document.querySelectorAll('.block');
  for(z = 0; z < blockToClick.length; z++){
    mainDivForCells.removeChild(blockToClick[z]);
  }
  
  root.style.setProperty('--max-width', (10 + numberCells * 100) + 'px');
  
  for(j = 0; j < numberCells; j++){
        arrayOfCells[j] = [];
      for(m = 0; m < numberCells; m++){
          arrayOfCells[j][m] = -1;
         divForCells = document.createElement('div');
         divForCells.classList.add("block");
        divForCells.id = j + "" + m;
         mainDivForCells.appendChild(divForCells);
        divForCells.addEventListener('click', blockToClickHandler); 
     }
    }
}


var i = 1;
var playersSign;
//Обрабочик события клика по диву. Удаляем обработчик, чтобы нельзя было перезаписать значение. При нечетном клике записывать в див Х, в соответствующее место в массиве ставит 1, при четном клике в див записывает О, в массив - 2
function blockToClickHandler(){
   if(i % 2 == 1){
     this.innerHTML="X";
     i = 2;
     playersSign = 1;
     this.removeEventListener('click', blockToClickHandler); 
     var recordToArray = this.id.split("");
     arrayOfCells[recordToArray[0]][recordToArray[1]] = 1;
     checkIfWin(recordToArray[0], recordToArray[1]);
   }
   else if (i % 2 == 0) {
     this.innerHTML="O"; 
     i =1;
     playersSign = 2;
     this.removeEventListener('click', blockToClickHandler);
     var recordToArray = this.id.split("");
     arrayOfCells[recordToArray[0]][recordToArray[1]] = 2;
     checkIfWin(recordToArray[0], recordToArray[1]);
   }
}


//Проверка на победу по диагоналям, горизонтали и вертикали
function checkIfWin(a, b){
  var gor = 0;
  var ver = 0;
  var diaLeft = 0;
  var diaRight = 0;
  for(q = 0; q < numberCells; q++){
      for(w = 0; w < numberCells; w++){
        if(arrayOfCells[q][w] == playersSign){
	          if (q == w){
               diaLeft++;}
	          if ((q + w) == (numberCells - 1)){
	             diaRight++;} 
            if(q == a){
               gor++;} 
            if(w == b){
               ver++;}
        }
      }
  }
  
      if(gor == numberCells || ver == numberCells || diaLeft == numberCells || diaRight == numberCells){
        clearHandes();
        console.log(playersSign + " игрок победил!");
    } 
}

//удаление обработчиков клика при выигрыше, конец игры
function clearHandes(){
  blockToClick = document.querySelectorAll('.block');
  for(f = 0; f < blockToClick.length; f++){
    blockToClick[f].removeEventListener('click', blockToClickHandler);
  }
}
