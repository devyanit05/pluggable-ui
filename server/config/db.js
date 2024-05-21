const mongoose = require("mongoose");

// const DB = process.env.MONGODB_LOCAL;
const DB = "mongodb://localhost:27017/pluggableui";

const connectDB = () => {
    mongoose.connect(DB).then(() => {
        console.log("db connected")
    }).catch((error) => { 
      console.log(error.message) 
    });
}

module.exports = connectDB;
