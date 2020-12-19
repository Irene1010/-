const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#timeleft');
let score = document.querySelector('#score');
let result = 0;
//let currentTime = timeLeft.textContent;

function randomSquare(){
  const square = document.querySelectorAll(".square");
  const mole = document.querySelectorAll('.mole');
  square.forEach(className => {
    className.classList.remove("mole");
  });
  let randomPosition = square[Math.floor(Math.random()*16)];
  randomPosition.classList.add("mole");
  hitPosition = randomPosition.id;
}

function check(){
  const square = document.querySelectorAll(".square");
  let score = document.querySelector('#score');
  square.forEach(id => {
    id.addEventListener('click', () => {
      if(id.id === hitPosition){
        result++;
        score.textContent = result;
        hitPosition = null;
      }
    })
  });
}

function moveMole(){
    let time = null;
    let checkTime = null;
    time = setInterval(randomSquare, 1000);
    checkTime = setInterval(check, 10);
}

moveMole();

function countDown(){
  const timeLeft = document.querySelector('#timeleft');
  let score = document.querySelector('#score');
  let currentTime = timeLeft.textContent;
  currentTime--;
  timeLeft.textContent = currentTime;

  if(currentTime===0){
    clearInterval(time);
    alert('Game Over. 당신의 점수는 '+result+'점입니다.');
    timeLeft.textContent = 60;
    score.textContent = 0;
    result = 0;
    time = setInterval(countDown, 1000);
  }
}

let time = setInterval(countDown, 1000);
