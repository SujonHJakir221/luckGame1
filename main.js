console.log("Connected");
//follow the steps to build a project
///////////////////////////////////step-1:selection
//score
const winningScoreElm = document.querySelector(".winningScore");
const scoreElm = document.querySelector(".score");
const player1scoreElm = document.querySelector(".p1Score");
const player2scoreElm = document.querySelector(".p2Score");
const winnerResult = document.querySelector(".winnerResult");
//form
const formElm = document.querySelector("form");
console.log(formElm);
const inputElm = document.querySelector("#luckInput");
const submitBtnElm = document.querySelector("#submitScoreBtn");
const resetBtnElm = document.querySelector("#resetGameScoreBtn");
//btn
const p1BtnElm = document.querySelector(".btn-player1");
const p2BtnElm = document.querySelector(".btn-player2");
const resetWinningScoreBtn = document.querySelector(".btn-resetWinningScore");
const playBtn = document.querySelector(".playBtn");
let p1score = 0;
let p2score = 0;
/////////////////submit part//////////////////////////////////
function validationInput(inputValue) {
  const isInValid = false;
  /////validation part
  // NaN !== NaN --> true
  if (!inputValue || inputValue !== inputValue || inputValue < 1) {
    alert("Invalid input.");
    isInValid = true;
  }
  return isInValid;
}
function resetInput(elm) {
  return (elm.value = " ");
}

formElm.addEventListener("submit", (elm) => {
  elm.preventDefault();
  const inputValue = Number(inputElm.value);
  const isValidVlu = validationInput(inputValue);
  if (isValidVlu) {
    return;
  }
  ////reset value
  resetInput(inputElm);
  //setting on winning score
  scoreElm.textContent = inputValue;
  return inputValue;
});
///////////////submit part end/////////////
/////////////////////////////////////////////
//handling player click
p1BtnElm.addEventListener("click", (evnt) => {
  p1score++;
  player1scoreElm.textContent = p1score;
  return p1score;
});
p2BtnElm.addEventListener("click", (evnt) => {
  p2score++;
  player2scoreElm.textContent = p2score;
  return p2score;
});
resetBtnElm.addEventListener("click", () => {
  winnerFunc(inputValue);
  resetInput(inputElm);
});

resetWinningScoreBtn.addEventListener("click", () => {
  scoreElm.textContent = " ";
});
//////////////////////////////winner part
console.log(p2score);
playBtn.addEventListener("click", () => {
  if (scoreElm == 0) {
    winnerResult.innerHTML = "SELECT SCORE FIRST";
  }
  if (p1score === 0 && p2score === 0) {
    winnerResult.innerHTML = "SUFFLE FIRST";
  }
  if (p1score === p2score) {
    winnerResult.innerHTML = "MATCH DROW";
  }
  if (p1score > p2score) {
    winnerResult.innerHTML = "PLAYER-1 WIN THE MATCH";
  }
  if (p1score > p2score) {
    winnerResult.innerHTML = "PLAYER-1 WIN THE SCORE";
  }
  if (p1score < p2score) {
    winnerResult.innerHTML = "PLAYER-2 WIN THE SCORE";
  }
});
