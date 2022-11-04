const holes= document.querySelectorAll('.hole');
const scoreBoard= document.querySelector('.score');
const moles= document.querySelectorAll('.mole');
const start=document.getElementById('startGame')
const cursor = document.querySelector('.cursor')
const naam = document.querySelector('.name')

let lastHole;
let timeUp = false;
let score = 0;

//Audio for bgm and onclick sound
bgmAudio=new Audio("./assets/bgm.mp3")
smashAudio=new Audio("./assets/assets_smash.mp3")

//Audio volume change
window.onload= timee()
function timee() {
    bgmAudio.play()
    bgmAudio.volume=0.3;
    setTimeout( startGame() , 4000);
   }




function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
var timer = document.getElementById("timer");
var t=10;

function randomHole(holes) {
const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      console.log('same');
      return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 10000)
}

function peep() {
    const time = randomTime(200, 1200);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
      hole.classList.remove('up');
      if (!timeUp) peep();
    }, time);

}
function gameover(){
    location.href=("gameover.html");
}
    
function bonk(e) {
    if(!e.isTrusted) return;
    score++;
    smashAudio.play();
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;

}
      
moles.forEach(mole => mole.addEventListener('click', bonk));

function runtimer() {
    if (t == 0) {
      clearInterval(abcd);
      gameover()
    }
    t--;
    sessionStorage.setItem("score", score)
  }
  let abcd = setInterval(runtimer, 1000);
  

window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
})
window.addEventListener('mousedown', () => {
    cursor.classList.add('active')
})
window.addEventListener('mouseup', () => {
    cursor.classList.remove('active')
})



//to display nickname
naam.innerHTML=JSON.parse(localStorage.getItem('yourname'));

