// INTRO
window.addEventListener("load", () => {
    setTimeout(()=>{
        intro.style.opacity = "0";
        setTimeout(()=>{
            intro.style.display = "none";
            document.querySelector(".hero").classList.add("show");
        },900)
    },3000)
})

const intro = document.getElementById("intro");

// MOBILE NAV
menuBtn.onclick = ()=> nav.classList.toggle("show")

// NAV SCROLL EFFECT
window.addEventListener("scroll", () => {
    document.querySelector("header")
    .classList.toggle("scrolled", window.scrollY > 30);
});

// SMOOTH SCROLL
function scrollToSection(id){
    document.getElementById(id).scrollIntoView({ behavior:"smooth" });
}

// DOWNLOAD BUTTON
function downloadApp(){
    alert("Aplikasi Trashure segera tersedia!");
}

// COUNTER
document.querySelectorAll(".counter").forEach(counter=>{
    const update = ()=>{
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const inc = target/200;

        if(count < target){
            counter.innerText = Math.ceil(count + inc);
            setTimeout(update,10);
        } else {
            counter.innerText = target.toLocaleString();
        }
    };
    update();
});

// REWARD SIMULATION
let saldo = 0;
function earnMoney(){
    let reward = Math.floor(Math.random()*5000) + 1000;
    saldo += reward;
    money.innerText = "Rp " + saldo.toLocaleString();
    alert("Selamat! Anda mendapat Rp " + reward);
}

// REVEAL ANIMATION
window.addEventListener("scroll", ()=>{
    document.querySelectorAll(".reveal").forEach(el=>{
        if(el.getBoundingClientRect().top < window.innerHeight - 100){
            el.classList.add("active")
        }
    })
})