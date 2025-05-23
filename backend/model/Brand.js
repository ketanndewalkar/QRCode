const mongoose = require("mongoose");

const countSchema = new mongoose.Schema({
  name: String,
  count: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically sets the current timestamp
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  image:{
    type:String,
    default:""
  }
});

const Count = mongoose.model("Count", countSchema);
module.exports = { Count, countSchema };
