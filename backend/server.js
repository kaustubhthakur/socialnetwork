const express = require('express')
const app = express();
const port = 9000
const mongoose = require('mongoose')
const cors = require('cors')
const authrouter = require('./routes/auth')
const postrouter = require('./routes/posts')
require('dotenv').config();
const connection = async() =>{
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log('db is connected..')
    } catch (error) {
        console.error(error);
    }
}
connection();
app.use('/auth',authrouter)
app.use('/posts',postrouter)
app.listen(port,() =>{
    console.log(`server is running on port ${port}...`)
})