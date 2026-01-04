const userModel = require("../models/userModel");
const bcrypt=require ("bcryptjs")
const JWT=require('jsonwebtoken');

//Register
const registerController = async (req,res) => {
   try {
      const {userName,email,password,phone,address ,answer} = req.body
      //validation
      if(!userName || !email || !password || !address || !phone || !answer){
        return res.status(500).send({
            success:false,
            message:'please  provide all fields'
        })
      }
      //check user
      const existing=await userModel.findOne({email}) 
      if(existing){
        return res.status(500).send({
            success:false,
            message:'Email already registered please login'
        })
      }
      // hashing password
      var salt=bcrypt.genSaltSync(10);
      const hashPassword=await bcrypt.hash(password,salt)

      //create new user
      const user=await userModel.create({
        userName,
        email,
        password:hashPassword,
        address,
        phone,
        answer,
      });
      res.status(201).send({
        success:true,
        message:'successfuly registered',
      });
   } catch (error) {
    console.log(error)
    res.status(500).send({
        success:false,
        message:'error in register API',
        error
    })
   }
};

//LOGIN
 const loginController= async (req,res) => {
  try {
    const {email,password}=req.body
    //vallodation
    if(!email || !password){
      return res.status(500).send({
        seccess:false,message:'please provide email OR password'
      })
    }

    //check user
    const user = await userModel.findOne({email}); 
    if (!user){
       return res.status(404).send({
        success:false,
        message:'user not found'
       });
      }
       //check user password || compare password
       const ismatch=bcrypt.compare(password,user.password)
       if(!ismatch){
        return res.status(500).send({
          success:false,
          message:"invalid credentials"
        })
       }
      // token
      const token=JWT.sign({id:user._id},process.env.JWT_SECRET, {
        expiresIn:'7d',
      })
    res.status(200).send({
      success:true,
      message:'login successfully',
      token,
      user,
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success:false,
        message:'error in login API',
        error
    })
    
  }
 }


module.exports={registerController,loginController};