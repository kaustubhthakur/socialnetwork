const express = require('express')
const app = express();
const port = 9000
const mongoose = require('mongoose')
const cors = require('cors')
const authrouter = require('./routes/auth')
const postrouter = require('./routes/posts')
const userrouter = require('./routes/users')
require('dotenv').config();
const cookieparser = require('cookie-parser')
const cloudinary = require('cloudinary')
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});
app.use(express.json())
app.use(cors())
app.use(cookieparser());
const connection = async() =>{
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log('db is connected..')
    } catch (error) {
        console.error(error);
    }
}
connection();
app.use('/auth'  ,authrouter)
app.use('/posts' ,postrouter)
app.use('/users' ,userrouter);

app.listen(port,() =>{
    console.log(`server is running on port ${port}...`)
})