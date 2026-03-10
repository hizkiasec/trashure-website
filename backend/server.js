const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const authRoutes = require("./auth")

app.use("/api",authRoutes)

app.listen(3000,()=>{
console.log("Server running http://localhost:3000")
})