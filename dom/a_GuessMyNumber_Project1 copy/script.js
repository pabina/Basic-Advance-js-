let guessNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let scoreField = document.querySelector(".score");
let score = 20;

let resultField = document.querySelector(".number");
let highscoreField = document.querySelector(".highscore");
let messageField = document.querySelector(".message");
let check_btn = document.querySelector(".check");
let inputfield = document.querySelector(".guess");
let agian = document.querySelector(".again");
highscoreField.value = highscore;
scoreField.value = score;

//appling dry principle
function message(mymessage) {
  messageField.innerHTML = mymessage;
  score = score - 1;
  scoreField.innerHTML = score;

  setTimeout(() => {
    inputfield.value = "";
  }, 800);
}

const checkFunction = function () {
  if (inputfield.value == "") {
    messageField.innerHTML = "No input Value!!";
  } else if (inputfield.value != guessNumber) {
    if (inputfield.value > guessNumber && score > 0) {
      //   messageField.innerHTML = "To High!";
      //   score = score - 1;
      //   scoreField.innerHTML = score;
      message("To High!");
    }
    if (inputfield.value < guessNumber && score > 0) {
      //   messageField.innerHTML = "To low";
      //   score = score - 1;
      //   scoreField.innerHTML = score;
      message("To low");
    }
    if (score <= 0) {
      //   messageField.innerHTML = "sorry you lose the game 😌";
      message("sorry you lose the game 😌");
    }
  } else if (inputfield.value == guessNumber) {
    messageField.innerHTML = "🎉🎉Correct Guess";
    scoreField.innerHTML = score;
    // highscoreField.innerHTML = score;
    if (score > highscore) {
      highscore = score;
      highscoreField.innerHTML = highscore;
    }
    resultField.innerHTML = inputfield.value;
    document.body.style.backgroundColor = "green";
  }
};
const againFunction = function () {
  guessNumber = Math.trunc(Math.random() * 20) + 1;
  document.body.style.backgroundColor = "black";
  score = scoreField.innerHTML = 20;
  messageField.innerHTML = "start guessing...";
  resultField.innerHTML = "?";
  inputfield.value = "";
};

check_btn.addEventListener("click", checkFunction);
agian.addEventListener("click", againFunction);
