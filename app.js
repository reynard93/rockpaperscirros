let items = ["paper","scissors","rock"];
function computerPlay(){
  return items[Math.floor(Math.random()*items.length)];
}

function playerSelection(){
  var choice;
  let trynumber = 0;
  do{
    if(trynumber > 0){
      choice = prompt(`please enter a VALID choice number tries: ${trynumber}`)
    } else{
      choice = prompt("please enter your choice").toLowerCase();
    }

    trynumber++;
  } while (items.indexOf(choice) == -1)
  return choice;
}


function playRound(){
  let playerChoice = playerSelection();
  let computerChoice = computerPlay();
  console.log(playerChoice, computerChoice)
  if (computerChoice ===  playerChoice){
    return 'Ah this is a DRAW!'
  } else if (items.indexOf(computerChoice) === 0 && items.indexOf(playerChoice) === 2){
    return 'The Computer wins! wow dis sum OpenAI shit';
  } else if (items.indexOf(playerChoice) === 0 && items.indexOf(computerChoice) === 2){
    return 'The player wins! hurray for humans!!';
  }
  else if (items.indexOf(computerChoice) > items.indexOf(playerChoice)){
    return 'The Computer wins! wow dis sum OpenAI shit';
  } else {
    return 'The player wins! hurray for humans!!';
  }
}

// console.log(playRound());

(function(){
  playerWins = 0;
  comWins = 0;
  for (var i = 0; i < 5; i++) { 
    let playString = playRound();
    console.log(playString);
    if (playString.includes('Computer')){
      comWins++;
    }else if (playString.includes('player')){
      playerWins++;
    }
  }
  console.log(`Player Wins ${playerWins} times, Computer Wins ${comWins} times.... and the ultimate winner is...drumroll please...` + (playerWins > comWins ? "PLAYER!!!!" : "COMPUTER!!!"));

})();

