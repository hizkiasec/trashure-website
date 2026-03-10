const API = "http://localhost:3000/api"

/* REGISTER */

const registerForm = document.getElementById("registerForm")

if(registerForm){

registerForm.addEventListener("submit",async function(e){

e.preventDefault()

const name = document.getElementById("name").value
const email = document.getElementById("email").value
const password = document.getElementById("password").value

const res = await fetch(API+"/register",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name:name,
email:email,
password:password
})
})

const data = await res.json()

alert(data.message)

if(res.ok){
window.location="login.html"
}

})

}


/* LOGIN */

const loginForm = document.getElementById("loginForm")

if(loginForm){

loginForm.addEventListener("submit",async function(e){

e.preventDefault()

const email = document.getElementById("email").value
const password = document.getElementById("password").value

const res = await fetch(API+"/login",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
email:email,
password:password
})
})

const data = await res.json()

if(!res.ok){
alert(data.message)
return
}

localStorage.setItem("token",data.token)
localStorage.setItem("role",data.role)

if(data.role === "admin"){
window.location="dashboard-admin.html"
}else{
window.location="dashboard-user.html"
}

})

}