const express = require('express');
const { createUser, loginUser, updateUser, deleteUser, dummyUpload } = require('../controllers/userController');
const verifyToken = require('../middleware/checkToken');
const upload = require('../config/multer');
const router = express.Router();

router.post('/signup' , createUser);
router.post('/login', loginUser);
router.put('/update',verifyToken,updateUser);
router.delete('/delete',verifyToken, deleteUser);
router.post('/uploadPic',upload.single('image'),dummyUpload)

module.exports = router

