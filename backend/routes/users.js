const express = require('express')
const router = express.Router();
const {addFriend,getUser,getUsers,deleteUser}= require('../controllers/users')
const protectRoute = require('../utils/protectRoute')
router.put('/:id/friend',protectRoute,addFriend)
router.get('/:id',protectRoute,getUser)
router.get('/',getUsers)
router.delete('/:id',protectRoute,deleteUser)

module.exports = router;