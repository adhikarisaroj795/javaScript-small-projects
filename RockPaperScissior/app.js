const startGameBtn = document.getElementById('start-game-btn'); 

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false ;


const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = ()=>{
  const randomValue = Math.random();// method to generate random value between o and 1
  let newRandomValue = randomValue;
  console.log(newRandomValue);
  if(randomValue < 0.34){
    return ROCK;
  }
  else if(randomValue< 0.67){
    return PAPER;
  }else{
    return SCISSORS;
  }
};
const getWinner =  (cChoice, pChoice) => { //arrow function
    if(cChoice === pChoice){
      return RESULT_DRAW;
    }else if(cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && SCISSORS || cChoice === SCISSORS && pChoice === ROCK ) {
      return  RESULT_PLAYER_WINS;

    } else{
      return RESULT_COMPUTER_WINS;
    }

};

startGameBtn.addEventListener('click', ()=> {
  if(gameIsRunning){
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
 let message = `you picked ${playerChoice}, computer picked ${computerChoice}, therefore you had a `;

  const winner = getWinner(computerChoice, playerChoice);
  if (winner === RESULT_DRAW){
      message = message + 'draw'
  }
  else if (winner === RESULT_PLAYER_WINS){
      message = message + 'won';
  }
  else{
    message = message +'lost';
  }

  alert(message);

  gameIsRunning = false;
});
