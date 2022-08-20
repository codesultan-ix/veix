//local

MONGO_URI = "mongodb+srv://codesultan:ebf68iS3W34gSES2@cluster0.1e3dd.mongodb.net/?retryWrites=true&w=majority";
DB_NAME = "veix";
const mongoose = require('mongoose');
mongoose.connect(
    MONGO_URI,
    {
      dbName: DB_NAME,
      autoIndex: true,
      socketTimeoutMS: 45000,
      serverSelectionTimeoutMS: 60000,
    },
// mongoose.connect('mongodb://localhost:27017/chatApp', {useNewUrlParser: true, useUnifiedTopology: true},
err => {
    if(!err){
        console.log("Connected successfully to Mongod server")
    }else{
        console.log("Error : "+err)
    }
})

require('./user.js');
require('./chat.js')
require('./schedule.js')
require('./call.js')
require('./otp.js')