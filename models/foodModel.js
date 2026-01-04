const mongoose=require("mongoose");

//schema
const foodSchema=new mongoose.Schema({
 title:{
    type:String,
    required:[true,'food title is reuired']
 } ,
 description:{
    type:String,
    required:[true,'food description is require'],
 },
 price:{
    type:Number,
    required:[true,'food price is require'],
 },
 imageUrl:{
    type:String,
    default:"https://similarpng.com/tag/food-logo/",
 },
 foodTags:{
    type:String,
 },
 category:{
    type:String,
 },
 code:{
    type:String,
 },
 isAvailable:{
    type:Boolean,
    default:true,
    
 },
 resturant:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'resturent',

 },
 rating:{
    type:Number,
    default:5,
    min:1,
    max:5,
 },
 retingCount:{
    type:String,
 },

},
{timestamps:true});

module.exports=mongoose.model('foods',foodSchema);