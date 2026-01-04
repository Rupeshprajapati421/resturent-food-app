const express=require("express");
const { getUserController, updateUserController, updatePasswordController, resetPasswordController, deleteProfileController } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router=express.Router()

//routes
//GET USER || GET
router.get('/getUser',authMiddleware, getUserController)




//UPDATE PROFILE
router.post('/updateUser',authMiddleware,updateUserController)

//UPDATE PASSWORD
//router.post('/updatePssword',authMiddleware,updatePasswordController)

//RESET PASSWORD
router.post('/resetPassword',authMiddleware,resetPasswordController)

//PASSWORD UPDATE
router.post('/updatePassword',authMiddleware,updatePasswordController)

//DELETE USER
router.delete('/deleteUser/:id',authMiddleware,deleteProfileController)

module.exports=router