// INTRO SCREEN

window.addEventListener("load", () => {

setTimeout(()=>{

document.getElementById("intro").style.opacity = "0"

setTimeout(()=>{

document.getElementById("intro").style.display = "none"

document.querySelector(".hero").classList.add("show")

},1000)

},3000)

})

// MENU MOBILE

const menuBtn = document.getElementById("menuBtn")
const nav = document.getElementById("nav")

menuBtn.onclick = ()=>{
nav.classList.toggle("show")
}

// NAVBAR SCROLL EFFECT

window.addEventListener("scroll", () => {

const header = document.querySelector("header")

if(window.scrollY > 30){
header.classList.add("scrolled")
}
else{
header.classList.remove("scrolled")
}

})

// SCROLL

function scrollToSection(id){

document.getElementById(id).scrollIntoView({
behavior:"smooth"
})

}

// DOWNLOAD

function downloadApp(){

alert("Aplikasi Trashure akan segera tersedia!")

}

// COUNTER

const counters = document.querySelectorAll(".counter")

counters.forEach(counter=>{

const update = ()=>{

const target = +counter.getAttribute("data-target")

const count = +counter.innerText

const inc = target / 200

if(count < target){

counter.innerText = Math.ceil(count + inc)

setTimeout(update,10)

}

else{

counter.innerText = target.toLocaleString()

}

}

update()

})

// REWARD

let saldo = 0

function earnMoney(){

let reward = Math.floor(Math.random()*5000)+1000

saldo += reward

const money = document.getElementById("money")

money.innerText = "Rp " + saldo.toLocaleString()

money.style.transform = "scale(1.3)"
money.style.transition = "0.3s"

setTimeout(()=>{
money.style.transform = "scale(1)"
},300)

alert("🎉 Selamat! Anda mendapat Rp " + reward)

}

// SCROLL ANIMATION

const reveals = document.querySelectorAll(".reveal")

window.addEventListener("scroll", ()=>{

reveals.forEach(el=>{

const top = el.getBoundingClientRect().top

const windowHeight = window.innerHeight

if(top < windowHeight - 100){

el.classList.add("active")

}

})

})