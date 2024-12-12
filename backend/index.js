const express = require("express")
const connection = require("./db")
const {userRouter}=require("./routes/user.route")
const app=express()
app.use(express.json())

app.get("/",async(req,res)=>{
    res.send("home")
})


app.use("/users",userRouter)
app.listen(8081,async()=>{
    try{
        await connection
        console.log("db connected")
    }
    catch(err){
        console.log(err)
    }
})