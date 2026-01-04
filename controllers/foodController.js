const foodModel = require("../models/foodModel");
const orderModel = require("../models/orderModel");

//create food
const createFoodController = async(req,res)=>{
    try {
        const {
            title,
            description,
             price,
             imageUrl,
              foodTags,
              category, 
              code,
              isAvailable,
              resturant,
              rating,
            }=req.body;

            if(!title || !description || !price || !resturant ){
                return res.status(500).send({
                    success:false,
                    message:'please provide all field'
                })
            }
            const newFood=new foodModel({
                 title,
            description,
             price,
             imageUrl,
              foodTags,
              category, 
              code,
              isAvailable,
             resturant,
              rating,
            });

            await newFood.save()
            res.status(201).send({
                success:true,
                message:'new food itme created',
                newFood
            })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in crete food API',
            error
        })
        
    }
}
//GET ALL FOOD
const getAllFoodController=async(req,res)=>{
    try {
        const foods=await foodModel.find({})
        if(!foods){
            return res.status(404).send({
                success:false,
                message:'no food item was found',
            })
        }
        res.status(200).send({
            success:true,
            totalFoods:foods.length,
            foods,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in get all food api',
            error
        });
        
    }
};

//GET SINGLE FOOD
const getSingleFoodController=async(req,res)=>{
    try {
        const foodId=req.params.id
        if(!foodId){
            return res.status(404).send({
                success:false,
                message:'please provide id'
            })
        }
        
        const food=await foodModel.findById(foodId)
        if(!food){
            return res.status(204).send({
                success:false,
                message:'no food found with this id'

            });
        }
        res.status(200).send({
            success:true,
            food,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in get single food api',
            error
        })
        
    }
};


//GET FOOD BY RESTURANT
const getFoodByResturantController=async(req,res)=>{
    try {
        const resturantId=req.params.id
        if(!resturantId){
            return res.status(404).send({
                success:false,
                message:'please provide id'
            })
        }
        
        const food=await foodModel.find({resturant:resturantId})
        if(!food){
            return res.status(204).send({
                success:false,
                message:'no food found with this id'

            });
        }
        res.status(200).send({
            success:true,
            message:'food based on resturant',
            food,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in get single food api',
            error
        })
        
    }
};

//UPDATE FOOD ITME
const updateFoodController =async (req,res) => {
    try {
        const foodId=req.params.id
        if(!foodId){
            return res.status(404).send({
                success:false,
                message:'no food id was found',
            })
        }
        const food =await foodModel.findById(foodId)
        if(!food){
            return res.status(404).send({
                success:false,
                Message:'no food found'
            })
        }
        const { 
             title,
            description,
             price,
             imageUrl,
              foodTags,
              category, 
              code,
              isAvailable,
             resturant,
              rating,
            }=req.body

         const updatedFood= await foodModel.findByIdAndUpdate(foodId,{ 
            title,
            description,
             price,
             imageUrl,
              foodTags,
              category, 
              code,
              isAvailable,
             resturant,
              rating,},
              {new:true})

              res.status(200).send({
                success:true,
                message:'food item was updated',
              })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in update food api',
            error
        })
        
    }
};

// DELETE FOOD
const deleteFoodController=async(req,res)=>{
    try {
        const foodId=req.params.id
        if(!foodId){
            return res.status(204).send({
                success:false,
                message:'provide food id'
            })
        }
        const food =await foodModel.findById(foodId)
        if(!food){
            return res.status(404).send({
                success:false,
                message:'no food found with this id'
            })
        }
        await foodModel.findByIdAndDelete(foodId)
        res.status(200).send({
            success:true,
            message:'food item deleted',
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in delete food api',
            error

        })
        
    }
    
};
//PLACE ORDER
const placeOrderController=async(req,res)=>{
    try {
        const {cart}=req.body
        if(!cart ){
            return res.status(500).send({
                success:false,
                message:'please food cart or payment method',
            })
        }
        let total=0
        //calclate
        cart.map((i)=>{
            total += i.price
        })
        const newOrder=new orderModel({
            foods:cart,
            payment:total,
            buyer:req.body.id,
        });

        await newOrder.save(); 

        res.status(201).send({
            success:true,
            message:'order placed successfully',
            newOrder
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in place order API',
            error

        })
        
    }

};

//CHANGE ORDER STATUS
const orderStatusController=async(req,res)=>{
    try {
        const orderId=req.params.id
        if(!orderId){
            return res.status(404).send({
                success:false,
                message:'please provide valid order id'
            })
        }
        const {status}=req.body
        const order=await orderModel.findByIdAndUpdate(orderId,{status},{new:true})
        res.status(200).send({
            success:true,
            message:'Order status updated'
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Order Status API',
            error


        })
        
    }
}


module.exports={createFoodController,
    getAllFoodController,
    getSingleFoodController,
    getFoodByResturantController,
    updateFoodController,
    deleteFoodController,
    placeOrderController,
    orderStatusController
};