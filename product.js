const mongoose = require('mongoose')

//===============> Define Schema
const productSchema = new mongoose.Schema({
  name : {
    type: String,
    required : [true, 'nama harus diisi'],
    minlength: 2,
    maxlength: 50,
  },

  price: {
    type: Number, 
    required : true,
    min: 1000,
    max: 1000000,
  },
  stock: {
    type: Number,
    min: 1,
    max: 1000,
    default: 1
  },
  status: { type: Boolean, default: true},
})

const Product = mongoose.model ('Product', productSchema);
module.exports = Product