import Mongoose from "mongoose";

const connectDB = async () => {
    await Mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=> console.log("Databased Connected"))
    .catch(err=>console.log(err));

};
module.exports = connectDB;