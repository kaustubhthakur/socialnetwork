const express = require('express')
const router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const protectRoute = require('../utils/protectRoute')
const {createpost,getPost,getPosts,deletePost,likeUnlikePost} = require('../controllers/posts')
router.post('/',protectRoute,upload.single(), createpost)
router.get('/:id',protectRoute,getPost)
router.get('/',protectRoute,getPosts)
router.delete('/:id',protectRoute,deletePost)
router.put('/vote/:id',protectRoute,likeUnlikePost)
module.exports = router;
