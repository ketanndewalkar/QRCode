const mongoose = require("mongoose");

const mongoConnect = async () =>{
    try {
        await mongoose.connect(process.env.MONGOURL);
        console.log("Mongodb is successuly connected");
    } catch (error) {
        console.log(error);
    }
}
module.exports = {mongoConnect};