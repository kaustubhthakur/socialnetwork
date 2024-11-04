const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    profilePic:{
        type:String,
        default:"",
    },
    bio:{
        type:String,
        default:"me and peru",
    },
    posts:{
        type:[String],
        default:[],
    },
    following:{
        type:[String],
        default:[],
    },
    followers:{
        type:[String],
        default:[]
    }
},{
    timestamps:true,
})
module.exports = mongoose.model("User",UserSchema)