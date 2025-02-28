const Post = require('../models/Post');
const User = require('../models/User');
const createpost = async(req,res)=>{
    try {
        const newpost = new Post(req.body);
        const savepost = await newpost.save();
        res.status(201).json(savepost);
    } catch (error) {
        console.error(error);
    }
}
const deletePost = async(req,res)=>{
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(201).json({message:"post deleted"});
    } catch (error) {
        console.error(error);
    }
}
const getPost = async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        res.status(201).json(post);
    } catch (error) {
        console.error(error);
    }
}
const getPosts = async(req,res)=>{
    try {
        const posts = await Post.find();
        res.status(201).json(posts);
    } catch (error) {
        console.error(error);
    }
}
module.exports = {getPosts,getPost,createpost}