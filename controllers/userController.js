const userModel = require("../models/userModel");

const bcrypt=require("bcryptjs")


//GET USER INFO
const getUserController= async (req,res)=>{
 try
 {
    // fond user
    const user=await userModel.findById(req.user.id)

    //validation
    if (!user){
        return res.status(404).send({
            success:false,
            message:'user not found'
        })
    }
    //hide password
    user.password=undefined
    //response
    res.status(200).send({
        success:true,
        message:"user data get Successfully",
        user,
    });

 }catch(error){
    console.log(error)
    res.status(500).send({
        success:false,
        message:'error in get user API',
        error
    })
 }

    
};

//UPDATE USER
const updateUserController= async(req,res)=> {
    try{
        //find user
        const user=await userModel.findById(req.user.id)
        //validation
        if(!user){
            return res.status(404).send({
                success:false,
                message:'user not found'
            })
        }
        //update
        const {userName,address,phone}=req.body;
        if(userName) user.userName=userName
        if(address)user.address=address
        if(phone)user.phone=phone
        //save user
        await user.save()
        res.status(200).send({
            success:true,
            message:'User update successfully'
        })

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in update User Profile'
        })
    }

};
//RESET PASSWORD
const resetPasswordController=async(req,res)=>{
    try{
      const {email,newPassword,answer}=req.body
      if(!email || !newPassword || !answer){
        return res.status(500).send({
            success:false,
            message:'please provide all field'
        })
      }
      const user=await userModel.findOne({email,answer})
      if(!user){
        return res.status(500).send({
            success:false,
            message:'user not found or invalid answer'
        })
      }
      // hashing password
            var salt=bcrypt.genSaltSync(10);
            user.password=await bcrypt.hash(newPassword,salt);
          // user.password=hashPassword
            await user.save();
            res.status(200).send({
                success:true,
                message:'password reset seccessfully'
            })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in PASSWORD RESET API',
            error
        })
    }
}

//UPDATE USER PASSWORD
const updatePasswordController=async(req,res) => {
    try{
       //find user
       const user=await userModel.findById(req.user.id)
       //validation
       if(!user){
        return res.status(404).send({
            success:false,
            message:'user not found'
        })
       }
       //get data from user
       const {oldPassword,newPassword}=req.body
       if(!oldPassword || !newPassword){
        return res.status(500).send({
            success:false,
            message:'please provide old or new password'
        })
       }
       //check user password || compare password
              const ismatch=bcrypt.compare(oldPassword,user.password)
              if(!ismatch){
               return res.status(500).send({
                 success:false,
                 message:"invalid old password"
               });
              }
          // hashing password
             var salt=bcrypt.genSaltSync(10);
             const hashPassword=await bcrypt.hash(newPassword,salt)
             user.password=hashPassword
             await user.save();
             res.status(200).send({
                success:true,
                message:'Password updated',
             })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in password update api',
            error
        })
    }

}

//DELETE PROFILE ACCOUNT
const deleteProfileController=async (req,res)=>{
    try{
     await userModel.findByIdAndDelete(req.params.id);
     return res.status(200).send({
        success:true,
        message:'your account has been deleted'
     });
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in delete profilr API',
            error
        })
    }

};

module.exports={
    getUserController,
    updateUserController,
    resetPasswordController,
    updatePasswordController,
    deleteProfileController
};