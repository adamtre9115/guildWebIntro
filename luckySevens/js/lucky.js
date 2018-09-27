// 1. ask the player how much money they have to bet
// 2. When the user clicks the Play button, the program then rolls the dice repeatedly until all the money is gone
// 3. The program keeps track of how many rolls were taken before the money ran out.
// 4. The program keeps track of the maximum amount of money held by the player.
// 5. The program keeps track of the maximum amount of money held by the player.
// 6. The program keeps track of how many rolls were taken at the point when the user held the most money.

// initial bet
let playerPot;
let updateStarting = document.querySelectorAll(".startingBet");

let currentPot;
let updateCurrent = document.querySelector("#currentPot");

// dice value
// let diceValue;
let updateRoll = document.querySelector("#rollValue");

// number of times dice rolled
let rollCount = 0;

// maximum amount held by player
let maxPot;
let maxDisplay = document.querySelector("#maxPot");

let rollsForMax = 0;
let maxRoll = document.querySelector("#rollMax");

let changeDisplay = document.querySelectorAll(".display");

let Begin = document.querySelector("#playGame");
let restartBtn = document.querySelector("#reset");

// get initial bet from player
function getBet() {
  let startingBet = prompt("How much money do you have to bet?");

  // loop through classes and update text
  for (items of updateStarting) {
    items.innerHTML = `$${startingBet}.00`;
  }

  // set player max pot to initial starting value
  maxPot = startingBet;
  maxDisplay.innerHTML = `$${maxPot}.00`;
  maxRoll.innerHTML = 1;

  // while starting bet is less than or equal to 0 let the player
  // know they need to place a bet
  while (parseFloat(startingBet) <= 0) {
    alert("You have to bet something to play this game!");
    startingBet = prompt("How much money do you have to bet?");
  }

  console.log("starting bet: " + startingBet);
  return parseFloat(startingBet);
}

// roll the game dice
function rollDie() {
  rollCount++;
  let numRolls = document.querySelector("#rollCount");
  numRolls.innerHTML = rollCount;

  let firstDice = Math.floor(Math.random() * 6 + 1);
  let secondDice = Math.floor(Math.random() * 6 + 1);
  let dieValue = firstDice + secondDice;
  updateRoll.innerHTML = `${dieValue}!`;
  console.log("You rolled: " + dieValue + " Roll Count is now " + rollCount);
  // update the player pot with the current values
  updatePot(dieValue);
  return dieValue;
}

// add or subtract from pot based on die value
function updatePot(dieValue) {
  let potValue = dieValue === 7 ? (playerPot += 4) : (playerPot -= 1);
  // let potValue = playerPot;
  console.log("Update Pot says the dice value is " + dieValue);

  updateCurrent.innerHTML = `$${playerPot}.00`;
  console.log("the player pot is " + playerPot);
  console.log("the maxpot was " + maxPot);

  // if the potValue is greater than what the player started with update the value
  if (playerPot > maxPot) {
    maxPot = potValue;
    maxDisplay.innerHTML = `$${maxPot}.00`;
    rollsForMax = rollCount;
    maxRoll.innerHTML = rollsForMax;
    console.log("the new maxPot is " + maxPot);
    console.log("It took " + rollsForMax + " to get the " + maxPot);
  }

  console.log("player Pot is: " + playerPot);
}

function continueGame() {
  //this button on click rolls the dice
  const RollDice = document.querySelector("#dice");
  RollDice.addEventListener("click", function() {
    // user can individually click to roll the dice

    // if (playerPot > 0) {
    //     rollDie();
    // } else {
    //     alert("You're game is over!")
    // }

    // dice will automatically be rolled for you
    while (playerPot > 0) {
      rollDie();
    }
    // alert("You're game is over!");
    updateRoll.innerHTML = "Game Over!";
  });
}

function initializeButtons() {
  Begin.addEventListener("click", function() {
    playGame();
    Begin.classList.add('hidden');
  });

  restartBtn.addEventListener("click", function() {
    resetGame();
  });
}
function resetGame() {
  // playerPot = 0;
  rollCount = 0;
  rollsForMax = 0;
  playGame();
}

function playGame() {
  // const Begin = document.querySelector('#playGame');
  // restartBtn.addEventListener('click', function(){
  //     resetGame();
  // })

  // Begin.addEventListener('click', function(){

  // remove hidden class name so items will be visible
  for (let i = 0; i < changeDisplay.length; i++) {
    changeDisplay[i].classList.remove("hidden");
  }

  playerPot = getBet();
  // diceValue = rollDie();
  rollDie();
  continueGame();
  // })
}

// playGame();
initializeButtons();
