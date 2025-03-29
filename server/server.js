const express = require("express");
require("dotenv").config()
const app = express();
const {DBConnect} = require("./dataBase/db")
const userRoute = require("./routes/userRuote")

app.use(express.json())

app.use("/api/v1/",userRoute)


DBConnect()
app.listen(process.env.PORT,()=>{
    console.log("App running port no 5000")
})