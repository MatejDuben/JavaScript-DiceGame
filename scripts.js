//VARIABLES
var totalScoreP0 = document.querySelector('#player0-score');
var totalScoreP1 = document.querySelector('#player1-score');
var currentScoreP0 = document.querySelector('#current-score-player0');
var currentScoreP1 = document.querySelector('#current-score-player1');
var diceImg = document.querySelector('#dice-img');
// buttons
var btnThrowDice = document.getElementById('throw-dice');
var btnLetScore = document.getElementById('let-score');
var btnNewGame = document.getElementById('new-game');

var winner = false;
const scoreToWin = 100;
var whoActive = 0;  //0-leftPlayer; 1-rightPlayer

/*****FUNCTIONS*****/
//----Normal func
function getDiceNumber() {
  diceImg.style.display = 'block';
  let diceRanNum = Math.ceil(Math.random()*6);
  diceImg.src = 'img/'+diceRanNum+'.jpg';

  if (whoActive === 0){
    currentScoreP0.textContent = parseInt(currentScoreP0.textContent) + diceRanNum;
    if (diceRanNum === 1){
      currentScoreP0.textContent = 0;
      whoActive =  1;
    };
  }
  else if (whoActive === 1){
    currentScoreP1.textContent = parseInt(currentScoreP1.textContent) + diceRanNum;
    if (diceRanNum === 1){
      currentScoreP1.textContent = 0;
      whoActive =  0;
    };
  };

}
//----Arrow func
newGame = () =>{
  totalScoreP0.textContent = 0;
  totalScoreP1.textContent = 0;
  currentScoreP0.textContent = 0;
  currentScoreP1.textContent = 0;
  diceImg.style.display = 'none';
};

letScore = () =>{
  
  if (whoActive === 0){
    let currentScoreInt = parseInt(currentScoreP0.textContent);
    totalScoreP0.textContent = parseInt(totalScoreP0.textContent) + currentScoreInt;
    currentScoreP0.textContent = 0;
    whoActive = 1;
  }
  else if (whoActive === 1){
    let currentScoreInt = parseInt(currentScoreP1.textContent);
    totalScoreP1.textContent = parseInt(totalScoreP1.textContent) + currentScoreInt;
    currentScoreP1.textContent = 0;
    whoActive = 0;
  };
};

//EVENTS
btnThrowDice.addEventListener('click', getDiceNumber);
btnLetScore.addEventListener('click', letScore); 
btnNewGame.addEventListener('click', newGame);

