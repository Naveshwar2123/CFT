const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
    ProductId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product",
        required : true,
    },
    TransactionType : {
        type : String,
        enum : ["purchase","Restock"],
        required : true
    },
    quantity: {
         type : Number,
        required : true,
        min : 1
    },

    transactionDate : {
        type : Date,
        default : Date.now 
    }
}

);

module.exports = mongoose.model("Transactions",TransactionSchema) ; 