const API = "https://trashure-api.onrender.com/api"


const loginForm = document.getElementById("loginForm")

if(loginForm){

loginForm.addEventListener("submit", async (e)=>{

e.preventDefault()

const email = document.getElementById("email").value
const password = document.getElementById("password").value

const res = await fetch(API + "/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
email,
password
})

})

const data = await res.json()

localStorage.setItem("token",data.token)

if(data.role === "admin"){
window.location="dashboard-admin.html"
}else{
window.location="dashboard-user.html"
}

})

}



const registerForm = document.getElementById("registerForm")

if(registerForm){

registerForm.addEventListener("submit", async (e)=>{

e.preventDefault()

const name = document.getElementById("name").value
const email = document.getElementById("email").value
const password = document.getElementById("password").value

await fetch(API + "/register",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name,
email,
password
})

})

alert("Register berhasil")

window.location="login.html"

})

}