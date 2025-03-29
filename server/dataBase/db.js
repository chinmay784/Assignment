require("dotenv").config()
const mongoose = require("mongoose");

exports.DBConnect = async () => {
    mongoose.connect(process.env.MONGO_URL).then(() => console.log("MongoDB Connected"))
        .catch((err) => {
            console.log(err)
            console.log("error")
        })
}