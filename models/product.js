const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    ProductName :{
        type : String,
        required : true,
        unique : true ,
        trim : true
    },
    Price : {
        type : Number,
        required : true,
        min : 0.01 
    },
    availableStock : {
         type : Number,
        required : true,
        min : 0,
        default : 0
    }
},
{
    timestamps : true
}

);

module.exports = mongoose.model("Product",ProductSchema) ;