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
    friends: { 
    type: [mongoose.Schema.Types.ObjectId], 
    ref: 'User',
    default:[], 
  },
    posts:{
        type:[String],
        default:[],
    },
    profilepic:{
        type:String,
        default:" ",
    },
    description:{
        type:String,
        default:"",
        }
},{
    timestamps:true,
})
module.exports = mongoose.model("User",UserSchema);