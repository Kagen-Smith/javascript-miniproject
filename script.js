// Confirm if they want to play again or not
confirm();
// Entering the the R,P,S
prompt();
// Entered invald number 
alert();

// Rock vs scissors, rock wins. Rock vs paper, rock loses. Rock vs rock, tie
function rock (){
    let result;
    // if rock vs scissors
    if (rock === rock) {
        result = console.log("Tie");
    } else if (rock > scissors) {
        result = console.log("Rock wins");
    } else if (rock < papper) {
        result = console.log("Rock loses")
    } else {
        return result;


    }
}

// If paper vs rock, paper wins. If paper vs scissors, paper loses.
function paper(){}

// If scissors vs paper, scissors wins. If scissors vs rock, scissors loses. 
function scissors(){}


//Worked through logic to get game working, need to add confirm(), prompt(), and alert()
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  } else {
    console.log('Invalid selection, please write rock, paper, or scissors');
  }
};

const getComputerChoice  = () => {
  randomNumber = Math.floor(Math.random() *3);
  switch(randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game was a tie.';
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'scissors') {
      return 'You win!';
    } else {
      return 'The computer wins!';
    }
  }
  if (userChoice === 'paper'){
    if (computerChoice === 'rock') {
      return 'You win!';
    } else {
      return 'The computer wins!';
    }
  }
  if (userChoice === 'scissors'){
    if (computerChoice === 'paper') {
      return 'You win!';
    } else {
      return 'The computer wins!';
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();





