const Express = require("express");
const Dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");
Dotenv.config();

connectDB();

const app = Express();

app.use(cors());
app.use(Express.json());


app.get("/",(req,res)=>{
    res.json({
        message: " Inventory management api is runing"
    });
});


app.use("/products",productRoutes);

const Port = process.env.Port || 5000 ;

app.listen(Port,()=>{
    console.log(`server is runing on port ${Port}`);
})
