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
    
      const { userId, friendId, action } = req.body;
  
      // Validate input
      if (!userId || !friendId || !action) {
        return res.status(400).json({ 
          message: 'User ID, Friend ID, and Action are required' 
        });
      }
  
 
      if (userId === friendId) {
        return res.status(400).json({ 
          message: 'Cannot modify friendship with yourself' 
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

      if (action === 'add') {
        // Check if already friends
        if (user.friends.includes(friendId)) {
          return res.status(400).json({ 
            message: 'Already friends' 
          });
        }
  
     
        user.friends.push(friendId);
        await user.save();
  
  
        friend.friends.push(userId);
        await friend.save();
  
        res.status(200).json({ 
          message: 'Friend added successfully',
          friends: user.friends 
        });
      } 
      else if (action === 'remove') {
     
        if (!user.friends.includes(friendId)) {
          return res.status(400).json({ 
            message: 'Not friends' 
          });
        }
  
        
        user.friends = user.friends.filter(
          id => id.toString() !== friendId
        );
        await user.save();

        friend.friends = friend.friends.filter(
          id => id.toString() !== userId
        );
        await friend.save();
  
        res.status(200).json({ 
          message: 'Friend removed successfully',
          friends: user.friends 
        });
      } 
      else {
   
        return res.status(400).json({ 
          message: 'Invalid action. Use "add" or "remove"' 
        });
      }
  
    } catch (error) {
      
      console.error('Friend modification error:', error);
  
      
      res.status(500).json({ 
        message: 'Server error occurred',
        error: error.message 
      });
    }
  };

module.exports = {getUser,getUsers,deleteUser,addFriend}