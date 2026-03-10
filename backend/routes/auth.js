const express = require("express")
const router = express.Router()

const db = require("./db")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const SECRET = "trashure_secret"


/* REGISTER */

router.post("/register",(req,res)=>{

const {name,email,password} = req.body

const hash = bcrypt.hashSync(password,10)

db.query(
"INSERT INTO users (name,email,password) VALUES (?,?,?)",
[name,email,hash],
(err,result)=>{

if(err){
return res.status(400).json({message:"Email sudah ada"})
}

res.json({message:"Register berhasil"})

})

})


/* LOGIN */

router.post("/login",(req,res)=>{

const {email,password} = req.body

db.query(
"SELECT * FROM users WHERE email=?",
[email],
(err,result)=>{

if(result.length === 0){
return res.status(400).json({message:"User tidak ditemukan"})
}

const user = result[0]

const valid = bcrypt.compareSync(password,user.password)

if(!valid){
return res.status(400).json({message:"Password salah"})
}

const token = jwt.sign(
{id:user.id,role:user.role},
SECRET,
{expiresIn:"1d"}
)

res.json({
token,
role:user.role
})

})

})

module.exports = router