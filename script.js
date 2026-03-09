// MENU MOBILE

const menuBtn = document.getElementById("menuBtn")
const nav = document.getElementById("nav")

menuBtn.onclick = ()=>{
nav.classList.toggle("show")
}



// SMOOTH SCROLL

function scrollToSection(id){

document.getElementById(id).scrollIntoView({
behavior:"smooth"
})

}



// SCROLL REVEAL

const reveals = document.querySelectorAll(".reveal")

window.addEventListener("scroll",()=>{

reveals.forEach(el=>{

const top = el.getBoundingClientRect().top
const windowHeight = window.innerHeight

if(top < windowHeight - 100){

el.classList.add("active")

}

})

})



// COUNTER ANIMATION

const counters = document.querySelectorAll(".counter")

counters.forEach(counter=>{

const update=()=>{

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



// WALLET SIMULATION

let saldo = 0

function earnMoney(){

let reward = Math.floor(Math.random()*5000)+1000

saldo += reward

document.getElementById("money").innerText =
"Rp " + saldo.toLocaleString()

alert("Selamat! Anda mendapat Rp " + reward)

}