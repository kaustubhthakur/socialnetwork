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
const addFriend = async (req, res) => {
  try {
      const { userId } = req.params;
      const friendId = req.body;

      // Validate input
      if (!friendId) {
          return res.status(400).json({
              message: 'Friend ID is required'
          });
      }

      if (userId === friendId) {
          return res.status(400).json({
              message: 'Cannot add yourself as a friend'
          });
      }

      // Find the user in the database
      const user = await User.findById(userId);
      if (!user) {
          return res.status(404).json({
              message: 'User not found'
          });
      }

      const friend = await User.findById(friendId);
      if (!friend) {
          return res.status(404).json({
              message: 'Friend not found'
          });
      }

      // Check if already friends
      if (user.friends.includes(friendId)) {
          return res.status(400).json({
              message: 'Already friends'
          });
      }

      // Add friend to both users' friend lists
      user.friends.push(friendId);
      await user.save();

      friend.friends.push(userId);
      await friend.save();

      return res.status(200).json({
          message: 'Friend added successfully',
          friends: user.friends
      });

  } catch (error) {
      console.error('Friend addition error:', error);
      return res.status(500).json({
          message: 'Server error occurred',
          error: error.message
      });
  }
};

module.exports = {getUser,getUsers,deleteUser,addFriend}