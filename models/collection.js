
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        default: 18,
        
    },
    DOB: {
        type: String,
       
        
    }
});
module.exports = mongoose.model("Product", productSchema);