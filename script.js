let total = 0

function addReward(){

let random = Math.floor(Math.random()*5000)+1000

total += random

document.getElementById("money").innerText = total.toLocaleString()

alert("Selamat! Anda mendapat reward Rp " + random)

}

function startMission(){

document.getElementById("cara").scrollIntoView({
behavior:"smooth"
})

}

function downloadApp(){

alert("Fitur download app akan segera tersedia!")

}