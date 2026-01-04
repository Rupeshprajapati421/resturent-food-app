const mongoose=require("mongoose");

//schema
const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:[true,'user name is required']
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'passward is required']
    },
    address:{
        type:Array,

    },
    phone:{
        type:String,
        required:[true,'phone no is required']
    },
    usertype:{
        type:String,
        required:[true,'user type is required'],
        default:'client',
        enum:['client','admin','vender','driver']
    },
    profile:{
        type:String,
        default:'https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small_2x/Basic_Ui__28186_29.jpg'

    },
    // answer:{
    //     type:String,
    //     required:[true,'Answer is required']
    // }

},
{timestamps:true});

module.exports=mongoose.model('user',userSchema);