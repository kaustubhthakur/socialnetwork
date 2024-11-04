const express = require('express')
const  router = express.Router();
const {updateUser,followUnFollowUser,getUser,getUsers} = require('../controllers/users')
const protectRoute = require('../utils/protectRoute')
router.put('/:id',protectRoute,followUnFollowUser)
router.put('/:id',protectRoute,updateUser)
router.get('/:id',protectRoute,getUser)
router.get('/',getUsers)
module.exports = router;