const play=document.getElementById("play-button")
const instruction=document.getElementById("instruction-button")
const inst = document.querySelector(".inst")
const input = document.querySelector(".input")
const submitButton=document.getElementById("submit")

//To bring instructions 
instruction.onclick=()=>{
    inst.classList.remove("hide")
}

//To hide instructions
inst.onclick = () => {
    inst.classList.add("hide")
}

//To bring username form
play.onclick =()=>{
    input.classList.remove("hide")
    localStorage.clear()
}


//To store username and nickname

function yourName(){
var uName = document.getElementById("yourname").value
var nName = document.getElementById("nickname").value
if(localStorage.getItem('yourname') == null){
    localStorage.setItem('yourname', '[]');
}  
if(localStorage.getItem('nickname') == null){
localStorage.setItem('nickname', '[]');
}  
var old_uName = JSON.parse(localStorage.getItem('yourname'));
var old_nName = JSON.parse(localStorage.getItem('nickname'));
old_uName.push(uName);
old_nName.push(nName);
localStorage.setItem('yourname', JSON.stringify(old_uName))
localStorage.setItem('nickname', JSON.stringify(old_nName))
}
submitButton.addEventListener('click', ()=>{
    yourName()
    location.href= "./game.html"
})
