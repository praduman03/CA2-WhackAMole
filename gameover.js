var playagain= document.getElementById("playbutt")

gameoverAudio= new Audio("./assets/gameover.mp3")
playbutt.onclick=hello;
function hello(){
    location.href=("game.html")
}
window.onload= audioStart
function audioStart(){
    gameoverAudio.play()
}
var scoreboard=document.querySelector(".score")
scoreboard.innerHTML= sessionStorage.getItem('score')



var phrasea=document.getElementById("phrasea")
var phrases=["Better Luck Next Time","Thankyou for playing","Well Played","Hooray!!"]
var phrasestwo=["Better Luck Next Time","You need to play again"]

if(scoreboard==0){
    phrasea.innerHTML= phrasestwo[Math.floor(Math.random()*2)]
}
else{
    phrasea.innerHTML= phrases[Math.floor(Math.random()*4)];
}