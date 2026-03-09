// MENU MOBILE

const menuBtn = document.getElementById("menuBtn")
const navMenu = document.getElementById("navMenu")

menuBtn.onclick = () =>{

navMenu.classList.toggle("show")

}



// SCROLL HERO

function startMission(){

document.getElementById("how").scrollIntoView({
behavior:"smooth"
})

}



// ANIMASI STATISTIK

let users = 0
let trash = 0
let reward = 0

function animateStats(){

let interval = setInterval(()=>{

if(users < 1200) users += 20
if(trash < 850) trash += 15
if(reward < 5000000) reward += 50000

document.getElementById("users").innerText = users
document.getElementById("trash").innerText = trash
document.getElementById("reward").innerText = reward.toLocaleString()

if(users>=1200 && trash>=850 && reward>=5000000){
clearInterval(interval)
}

},50)

}

animateStats()



// WALLET SIMULASI

let saldo = 0

function earnMoney(){

let reward = Math.floor(Math.random()*5000)+1000

saldo += reward

document.getElementById("money").innerText =
"Rp " + saldo.toLocaleString()

alert("Anda mendapatkan reward Rp " + reward)

}