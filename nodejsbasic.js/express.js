/*const express = require('express')
const path = require('path')
const app = express()
const router = express.Router()
//อ้างอิงตำแหน่งไฟล์
app.get("/",(req,res)=>{
    res.status(200)
    res.type('text/html')   
    res.sendFile(path.join(__dirname,"templates/index.html"))
})
app.get("/product",(req,res)=>{
    res.sendFile(path.join(__dirname,"templates/product1.html"))
})
app.listen(8080, () => {
    console.log("รัน server ที่ port 8080")
})
*/