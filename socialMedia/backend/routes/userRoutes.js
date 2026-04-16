const express = require('express');
const { createUser, loginUser, updateUser,getResetToken, deleteUser, dummyUpload, forgetPassword } = require('../controllers/userController');
const verifyToken = require('../middleware/checkToken');
const upload = require('../config/multer');
const router = express.Router();

router.post('/signup' , createUser);
router.post('/login', loginUser);
router.put('/update',verifyToken,updateUser);
router.delete('/delete',verifyToken, deleteUser);
router.post('/uploadPic',upload.single('image'),dummyUpload)
router.post('/forgetpassword',forgetPassword)

router.get('/forgetpassword/:token', getResetToken)

module.exports = router

