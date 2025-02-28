const express = require('express')
const router = express.Router();
const protectRoute = require('../utils/protectRoute')
const {createpost,getPost,getPosts} = require('../controllers/posts')
router.post('/',protectRoute,createpost)
router.get('/:id',protectRoute,getPost)
router.get('/',protectRoute,getPosts)
