// MENU MOBILE

const menuBtn = document.getElementById("menuBtn")
const nav = document.getElementById("nav")

menuBtn.onclick = ()=>{
nav.classList.toggle("show")
}


// SCROLL

function scrollToSection(id){

document.getElementById(id).scrollIntoView({
behavior:"smooth"
})

}


// DOWNLOAD BUTTON

function downloadApp(){

alert("Aplikasi Trashure akan segera tersedia!")

}


// COUNTER

const counters = document.querySelectorAll(".counter")

counters.forEach(counter=>{

const update = ()=>{

const target = +counter.getAttribute("data-target")
const count = +counter.innerText

const inc = target/200

if(count < target){

counter.innerText = Math.ceil(count + inc)

setTimeout(update,10)

}else{

counter.innerText = target.toLocaleString()

}

}

update()

})


// WALLET

let saldo = 0

function earnMoney(){

let reward = Math.floor(Math.random()*5000)+1000

saldo += reward

document.getElementById("money").innerText =
"Rp " + saldo.toLocaleString()

alert("Anda mendapatkan Rp " + reward)

}