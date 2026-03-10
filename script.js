// INTRO SCREEN
window.addEventListener("load", () => {
    setTimeout(()=>{
        document.getElementById("intro").style.opacity = "0";
        setTimeout(()=>{
            document.getElementById("intro").style.display = "none";
            document.querySelector(".hero").classList.add("show");
        },1000)
    },3000)
})

// MENU MOBILE
const menuBtn = document.getElementById("menuBtn")
const nav = document.getElementById("nav")

menuBtn.onclick = ()=>{
    nav.classList.toggle("show")
}

// SCROLL NAVBAR EFFECT
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if(window.scrollY > 30){
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// SMOOTH SCROLL
function scrollToSection(id){
    document.getElementById(id).scrollIntoView({
        behavior:"smooth"
    })
}

// DOWNLOAD APP
function downloadApp(){
    alert("Aplikasi Trashure akan segera tersedia!");
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
        } else {
            counter.innerText = target.toLocaleString()
        }
    }
    update()
})

// REWARD SIMULATION
let saldo = 0

function earnMoney(){
    let reward = Math.floor(Math.random()*5000)+1000
    saldo += reward
    document.getElementById("money").innerText =
        "Rp " + saldo.toLocaleString()
    alert("Selamat! Anda mendapat Rp " + reward)
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