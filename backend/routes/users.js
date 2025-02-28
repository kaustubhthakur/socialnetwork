const express = require('express')
const router = express.Router();
const protectRoute = require('../utils/protectRoute')
const {deleteUser,updateUser,getUser,getUserProfile,getUsers,followUnFollowUser} = require('../controllers/users')
router.delete('/:id',protectRoute,deleteUser)
router.put('/:id',protectRoute,updateUser)
router.put('/:id/follow',protectRoute,followUnFollowUser)
router.get('/:id',protectRoute,getUserProfile)
router.get('/:id',protectRoute,getUser)
router.get('/',getUsers)
module.exports = router;