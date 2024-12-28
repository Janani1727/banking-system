const express = require("express")
const connection = require("./db")
const cors=require("cors")
const {userRouter}=require("./routes/user.route")
const {accRouter} = require("./routes/account.route")
const {transactionRouter}=require("./routes/transaction.route")
const { loanRouter } = require("./routes/loan.route")


const app=express()
app.use(express.json())
app.use(cors())
app.get("/",async(req,res)=>{
    res.send("home")
})


app.use("/users",userRouter)
app.use("/acc",accRouter)
app.use("/transac",transactionRouter)
app.use("/loan",loanRouter)

app.listen(8081,async()=>{
    try{
        await connection
        console.log("db connected")
    }
    catch(err){
        console.log(err)
    }
})