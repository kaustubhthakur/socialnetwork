const Post = require('../models/Post')
const User = require('../models/User')
const cloudinary = require('cloudinary')
const createPost = async(req,res)=>{
    try {
    const {description ,userId} = req.body;
    let {image} = req.body;
    const user = await User.findById(userId)
    if(!user)
      {
        return res.status(404).json({ error: "User not found" });
      }    
      if (image) {
        const uploadedResponse = await cloudinary.uploader.upload(image);
        image = uploadedResponse.secure_url;
      }
      const newPost = new Post({description,image,userId });
		const savepost = await newPost.save();

    res.status(201).json(savepost);

    } catch (error) {
        console.error(error);
    }
}
const getPost = async(req,res)=>{
    try {
        const post = Post.findById(req.params.id);
        res.status(201).json(post);
    } catch (error) {
        console.error(error);
    }
}
const deletePost =async(req,res)=>{
    try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(201).json({message:"post has been deleted..."})
    } catch (error) {
        console.error(error);
    }
}
const votepost = async(req,res)=>{
    try {
        const { id: postId } = req.params;
		const userId = req.user._id;

		const post = await Post.findById(postId);

		if (!post) {
			return res.status(404).json({ error: "Post not found" });
		}

		const userLikedPost = post.votes.includes(userId);

		if (userLikedPost) {
			
			await Post.updateOne({ _id: postId }, { $pull: { votes: userId } });
			res.status(200).json({ message: "Post unliked successfully" });
		} else {
			
			post.votes.push(userId);
			await post.save();
			res.status(200).json({ message: "Post liked successfully" });
		}
    } catch (error) {
        console.error(error);
    }
}
const getPosts = async(req,res)=>{
    try {
        const posts = await Post.find();
        res.status(201).json(posts);
    } catch (error) {
        console.log(error);
    }
}
const updatePost = async (req, res) => {
    try {
      const { postId, userId, description, image } = req.body;
  
      // Validate input
      if (!postId) {
        return res.status(400).json({ 
          message: 'Post ID is required' 
        });
      }
  
      // Find the post
      const post = await Post.findById(postId);
  
      // Check if post exists
      if (!post) {
        return res.status(404).json({ 
          message: 'Post not found' 
        });
      }
  
      // Verify user authorization
      if (post.userId !== userId) {
        return res.status(403).json({ 
          message: 'Unauthorized to update this post' 
        });
      }
  
      // Prepare update object
      const updateData = {};
  
      // Update description if provided
      if (description !== undefined) {
        if (description.trim() === '') {
          return res.status(400).json({ 
            message: 'Description cannot be empty' 
          });
        }
        updateData.description = description;
      }
  
      // Update image if provided
      if (image !== undefined) {
        if (image.trim() === '') {
          return res.status(400).json({ 
            message: 'Image URL cannot be empty' 
          });
        }
        updateData.image = image;
      }
  
      // Check if any updates are actually provided
      if (Object.keys(updateData).length === 0) {
        return res.status(400).json({ 
          message: 'No update data provided' 
        });
      }
  
      // Perform the update
      const updatedPost = await Post.findByIdAndUpdate(
        postId, 
        updateData, 
        { 
          new: true,  // Return the updated document
          runValidators: true  // Run model validation
        }
      );
  
      // Respond with updated post
      res.status(200).json({
        message: 'Post updated successfully',
        post: updatedPost
      });
  
    } catch (error) {
      // Log the error
      console.error('Update post error:', error);
  
      // Handle specific mongoose validation errors
      if (error.name === 'ValidationError') {
        return res.status(400).json({
          message: 'Validation Error',
          errors: Object.values(error.errors).map(err => err.message)
        });
      }
  
      // Generic server error
      res.status(500).json({ 
        message: 'Server error occurred',
        error: error.message 
      });
    }
  };
  
module.exports = {getPost,createPost,getPosts,deletePost,votepost,updatePost}
