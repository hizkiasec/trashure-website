// hamburger menu

const hamburger = document.getElementById("hamburger")
const navLinks = document.getElementById("navLinks")

hamburger.onclick = () =>{
navLinks.classList.toggle("show")
}



// smooth scroll button

document.getElementById("startBtn").onclick = () =>{
document.getElementById("features").scrollIntoView({
behavior:"smooth"
})
}



document.getElementById("joinBtn").onclick = () =>{
alert("Terima kasih! Fitur aplikasi akan segera hadir.")
}



// reveal animation

const reveals = document.querySelectorAll(".reveal")

window.addEventListener("scroll", ()=>{

reveals.forEach(el=>{

const windowHeight = window.innerHeight
const elementTop = el.getBoundingClientRect().top

if(elementTop < windowHeight - 100){
el.classList.add("active")
}

})

})



// counter animation

const counters = document.querySelectorAll(".number")

const speed = 200

counters.forEach(counter=>{

const update = ()=>{

const target = +counter.getAttribute("data-target")
const count = +counter.innerText

const inc = target / speed

if(count < target){

counter.innerText = Math.ceil(count + inc)

setTimeout(update,10)

}else{

counter.innerText = target

}

}

update()

})