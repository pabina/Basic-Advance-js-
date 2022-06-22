"use strict";
//selecting element
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
let current0El = document.getElementById("current--0");
let current1El = document.getElementById("current--1");
const dicEl = document.querySelector(".dice");

//selecting button
const btnnew = document.querySelector(".btn--new");
const btnroll = document.querySelector(".btn--roll");
const btnhold = document.querySelector(".btn--hold");

// score0El.textContent = 0;
// score1El.textContent = 0;
// dicEl.classList.add("hidden");
// const score = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true;
let currentScore, activePlayer, playing, score;

//initialization
const init = function () {
  dicEl.classList.add("hidden");
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
//calling init function
init();
//switching player
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//rolling dice functionality
btnroll.addEventListener("click", function () {
  if (playing) {
    //1 generating random dice roll
    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //2. display dice roll
    dicEl.classList.remove("hidden");
    dicEl.src = `images/dice-${dice}.png`;
    //check for roll1?
    if (dice !== 1) {
      //add dice to current score
      currentScore += dice;
      // current0El.textContent = currentScore;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to next player
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // currentScore = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // player0El.classList.toggle("player--active");
      // player1El.classList.toggle("player--active");
      switchPlayer();
    }
  }
});

//clicking on hold btn

btnhold.addEventListener("click", function () {
  if (playing) {
    //1 add current score to the active players score
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    //2 check if the player score is greater than 100
    if (score[activePlayer] >= 10) {
      playing = false;
      dicEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      //3 switching players
      switchPlayer();
    }
  }
});

//working on resetting button
btnnew.addEventListener("click", function () {
  // score = [0, 0];
  // currentScore = 0;
  // score0El.textContent = 0;
  // score1El.textContent = 0;
  // current0El.textContent = 0;
  // current1El.textContent = 0;
  // player0El.classList.remove("player--winner");
  // player1El.classList.remove("player-winner");
  // player0El.classList.add("player--active");
  // player1El.classList.remove("player--active");
  init();
});
