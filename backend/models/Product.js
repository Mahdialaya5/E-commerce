const mongoose = require('mongoose')
const User=require("./User")

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number,required:true },
    img:{type:String},
  seller: { type: mongoose.Schema.Types.ObjectId,ref:User },
    })
const Product = mongoose.model("product", productSchema)
module.exports = Product