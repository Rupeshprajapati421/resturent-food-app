const userModel=require('../models/userModel')
module.exports = async(req, res, next) => {
  try {
   
      const user =await userModel.findById(req.params.id);
      console.log(req.body.id);
      console.log("user from mondodb"+user);
      if(user.usertype!=="admin"){
        return res.status(401).send({
            success:false,
            message:'only admin access'
        });
       
      } else {
            next();
        } 

      
  } catch (error) {
    console.error("Auth Middleware Error:", error);

    res.status(500).json({
      success: false,
      message: "un-Authorized access",
      error: error.message,
    });
  }
};
