const express = require('express')
const port = 9000;
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authrouter = require('./routes/auth')
const postrouter = require('./routes/posts')
const userrouter = require('./routes/users')
require('dotenv').config();

app.use(express.json())
app.use(cors())
app.use(cookieParser())



const connection = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log('database is connected...')
    } catch (error) {
        console.error(error);
    }
}
connection();


app.use('/auth',authrouter);
app.use('/posts',postrouter)
app.use('/users',userrouter)
app.listen(port,  ()=> {
    console.log(`server is running on port ${port}...`)
})