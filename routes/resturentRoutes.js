const express=require("express");

const authMiddleware = require("../middleware/authMiddleware");
const { createResturentController, getAllResturentController } = require("../controllers/resturentController");

const router=express.Router()

//routes
//create resturent || post
router.post('/create',authMiddleware,createResturentController);

// GET ALL RESTURENT || GET
router.get('/getAll',getAllResturentController)


module.exports=router