const Mongoose = require("mongoose");
const connectDB = async () =>{
    try{
        await 
        Mongoose.connect(process.env.Mongo_URL);
        console.log("mongodb Connected");
    }
    catch(err) {
        console.log("Mongodb connection error" , err.message);
        process.exit(1);
    }
}

module.export = connectDB ;
