const express=require("express");

const authMiddleware = require("../middleware/authMiddleware");
const { createFoodController, getAllFoodController, getSingleFoodController, getFoodByResturantController, updateFoodController, deleteFoodController, placeOrderController, orderStatusController } = require("../controllers/foodController");
const adminMiddleware = require("../middleware/adminMiddleware");

const router=express.Router()

//CREATE FOOD
router.post('/create',authMiddleware,createFoodController);

//GET ALL FOOD
router.get('/getAll',getAllFoodController);

//GET SINGLE FOOD
router.get('/get/:id',getSingleFoodController);

//GET FOOD BY REATURant
router.get('/getByResturant/:id',getFoodByResturantController);

// UPDATE FOOD
router.put('/update/:id',authMiddleware,updateFoodController);

// DELETE FOOD
router.delete('/delete/:id',authMiddleware,deleteFoodController);

//PLACE ORDER
router.post('/placeorder',authMiddleware,placeOrderController);

//ORDER STATUS
router.post('/orderStatus/:id',adminMiddleware,authMiddleware,orderStatusController)

module.exports=router