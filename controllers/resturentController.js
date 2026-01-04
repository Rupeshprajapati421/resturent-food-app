const resturentModel = require("../models/resturentModel");

//CREATE RESTURENT
const createResturentController=async(req,res)=>{
    try{
      const  {
        title,
        imageUrl,
        foods,time,
        pickup,
        delivery,
        logoUrl,
        rating,
        retingCount,
        coords,
    }= req.body;

    //validation
    if(!title || !coords){
        return res.status(500).send({
            success:false,
            message:'please provide title and address'

        });
    }
    const newResturent=new resturentModel({
        title,
        imageUrl,
        foods,time,
        pickup,
        delivery,
        logoUrl,
        rating,
        retingCount,
        coords, 
    })

    await newResturent.save()

    res.status(201).send({
        success:true,
        message:'new resturent created successfully',
    })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'errir in create Resturent api',
            error
        });
    }

};

//GET ALL RESTURENT
const getAllResturentController=async(req,res)=>{
    try{
      const resturents =await resturentModel.find()({})
      if(!resturents){
        return res.status(404).send({
            success:false,
            message:'no resturent available'
        })
      } 
      res.status(200).send({
        success:true,
        totalCount:resturents .length,
        resturents
      })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in get all resturent api',
            error

        })
    }
       
}
    module.exports={createResturentController,getAllResturentController}
