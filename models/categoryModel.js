const mongoose=require("mongoose");

//schema
const categorySchema=new mongoose.Schema({
  title:{
    type:String,
    required:[true,'category title is required']
  },
  imageUrl:{
    type:String,
    default:"https://similarpng.com/tag/food-logo/"
  },

},
{timestamps:true});

module.exports=mongoose.model('category',categorySchema);