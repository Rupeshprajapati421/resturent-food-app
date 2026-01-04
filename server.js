const express=require("express");
const colors=require("colors");
const cors=require("cors");
const morgan=require("morgan");
const dotenv=require("dotenv");
const connectDb = require("./config/db");




// dot env configuration
dotenv.config()

// db-connection
connectDb()

//rest object
const app=express()

// middleware
 app.use(cors());
app.use(express.json());
 app.use(morgan('dev'));



// route

const PORT=8080;
 app.use('/api/v1/test',require('./routes/textRoutes'));
 app.use('/api/v1/auth',require('./routes/authRoutes'));
 app.use('/api/v1/user',require('./routes/userRoutes'));
 app.use('/api/v1/resturent',require('./routes/resturentRoutes'));
 app.use('/api/v1/category',require('./routes/categoryRoutes'));
 app.use('/api/v1/food',require('./routes/foodRoutes'))

app.get("/",(req,res)=>{
    return res
    .status(200)
    .send("<h1> hello welcome to food server</h1>");
});

console.log(process.env.PORT)

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`.white.bgMagenta);
});