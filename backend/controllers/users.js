const User = require('../models/User')
const getUser = async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
    }
}
const getUsers = async(req,res)=>{
    try {
        const users = await User.find();
        res.status(201).json(users);
    } catch (error) {
        console.log(error);
    }
}
const deleteUser = async(req,res)=>{
    try {
 await User.findByIdAndDelete(req.params.id);
 res.status(201).json({message:"user has been deleted..."})        
    } catch (error) {
        console.error(error);
    }
}
const addFriend = async(req,res)=>{
    
}
module.exports = {getUser,getUsers,deleteUser}