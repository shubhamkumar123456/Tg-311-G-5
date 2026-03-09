const express = require('express');
const { createPost, getPosts, updatePost, deletePost } = require('../controllers/postController');
const verifyToken = require('../middleware/checkToken');
const upload = require('../config/multer');
const router = express.Router();

router.post('/create',upload.single('image'),verifyToken,createPost);
router.get('/allpost', getPosts);
router.put('/update/:id', updatePost);
router.delete('/delete/:id', deletePost);

module.exports = router;