const express = require('express')
const app = express();
const port = 8000;
const cors = require('cors')
const cookieparser = require('cookie-parser')
const authrouter = require('./routes/auth')
const mongoose = require('mongoose')
require('dotenv').config();
const userrouter = require('./routes/users')
const postrouter = require('./routes/posts')
app.use(express.json())
app.use(cors())
app.use(cookieparser())


const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log('db is connected...');
    } catch (error) {
        console.error(error);
    }
}
connection()
app.use('/auth', authrouter);
app.use('/posts',postrouter)
app.use('/users',userrouter)
app.listen(port, () => {
    console.log(`server is running on port ${port}...`);
})