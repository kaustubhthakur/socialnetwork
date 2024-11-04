const express = require('express')
const router = express.Router();
const {getpost,createPost,deletePost,likeUnlikePost,getposts}= require('../controllers/posts')
const protectRoute = require('../utils/protectRoute')
router.post('/',protectRoute,createPost)
router.get('/',getposts)
router.get('/:id',getpost)
router.delete('/:id',protectRoute,deletePost)
router.put('/:id/vote',protectRoute,likeUnlikePost)
module.exports = router;