const express = require('express')
const router = express.Router();
const {getPost,getPosts,createPost,deletePost} = require('../controllers/posts')
const protectRoute = require('../utils/protectRoute')
router.post('/',protectRoute,createPost)
router.delete('/:id',protectRoute,deletePost)
router.get('/:id',getPost)
router.get('/',getPosts)
module.exports = router;