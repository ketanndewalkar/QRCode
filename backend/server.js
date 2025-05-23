const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const {mongoConnect} = require("./mongodb");
const {countSchema,Count} = require("./model/Brand");
const redirectrouter = require("./Router/handleredirect");

(async()=> {
    await mongoConnect();
})();


app.use("/",redirectrouter);

app.listen(process.env.PORT,()=>console.log(`the server is running on port ${process.env.PORT}`));