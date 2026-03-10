// INTRO SCREEN

window.addEventListener("load", () => {

setTimeout(()=>{

const intro = document.getElementById("intro")

intro.style.opacity = "0"

setTimeout(()=>{

intro.style.display = "none"

document.querySelector(".hero").classList.add("show")

},1000)

},3200)

})


// MOBILE MENU

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


// DOWNLOAD ALERT

function downloadApp(){
alert("Aplikasi Trashure akan segera tersedia!")
}


// NAVBAR SCROLL EFFECT

const header = document.getElementById("header")

window.addEventListener("scroll", ()=>{

if(window.scrollY > 40){
header.classList.add("scrolled")
}
else{
header.classList.remove("scrolled")
}

})


// COUNTER ANIMATION

const counters = document.querySelectorAll(".counter")

const speed = 200

counters.forEach(counter=>{

const animate = ()=>{

const target = +counter.getAttribute("data-target")

const count = +counter.innerText

const inc = target / speed

if(count < target){

counter.innerText = Math.ceil(count + inc)
setTimeout(animate,10)

}else{

counter.innerText = target.toLocaleString()

}

}

animate()

})


// REWARD SYSTEM

let saldo = 0

function earnMoney(){

let reward = Math.floor(Math.random()*5000)+1000

saldo += reward

document.getElementById("money").innerText =
"Rp " + saldo.toLocaleString()

showRewardAnimation(reward)

}


// REWARD POPUP ANIMATION

function showRewardAnimation(amount){

const popup = document.createElement("div")

popup.innerText = "+ Rp " + amount.toLocaleString()

popup.style.position = "fixed"
popup.style.left = "50%"
popup.style.bottom = "120px"
popup.style.transform = "translateX(-50%)"
popup.style.background = "#22c55e"
popup.style.color = "white"
popup.style.padding = "12px 22px"
popup.style.borderRadius = "30px"
popup.style.fontWeight = "600"
popup.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)"
popup.style.zIndex = "9999"
popup.style.opacity = "0"
popup.style.transition = "all 0.5s ease"

document.body.appendChild(popup)

setTimeout(()=>{
popup.style.opacity = "1"
popup.style.bottom = "160px"
},50)

setTimeout(()=>{
popup.style.opacity = "0"
popup.style.bottom = "200px"
},2000)

setTimeout(()=>{
popup.remove()
},2500)

}


// SCROLL REVEAL ANIMATION

const reveals = document.querySelectorAll(".reveal")

function revealOnScroll(){

const windowHeight = window.innerHeight

reveals.forEach(el=>{

const top = el.getBoundingClientRect().top

if(top < windowHeight - 100){
el.classList.add("active")
}

})

}

window.addEventListener("scroll", revealOnScroll)


// PARALLAX HERO EFFECT

window.addEventListener("scroll", ()=>{

const hero = document.querySelector(".hero")

let offset = window.scrollY * 0.3

hero.style.backgroundPosition = "center " + offset + "px"

})


// BUTTON HOVER EFFECT

const buttons = document.querySelectorAll("button")

buttons.forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect = btn.getBoundingClientRect()

const x = e.clientX - rect.left
const y = e.clientY - rect.top

btn.style.backgroundPosition = x+"px "+y+"px"

})

})


// FLOATING FEATURE CARDS

const features = document.querySelectorAll(".feature")

features.forEach((card,i)=>{

card.style.animation = "floatCard 6s ease-in-out infinite"
card.style.animationDelay = (i*0.5)+"s"

})


// FLOATING STATS

const stats = document.querySelectorAll(".stat")

stats.forEach((card,i)=>{

card.style.animation = "floatCard 7s ease-in-out infinite"
card.style.animationDelay = (i*0.4)+"s"

})


// FLOAT KEYFRAME INJECT

const style = document.createElement("style")

style.innerHTML = `

@keyframes floatCard{
0%{
transform:translateY(0px)
}
50%{
transform:translateY(-8px)
}
100%{
transform:translateY(0px)
}
}

`

document.head.appendChild(style)