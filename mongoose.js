const mongoose = require('mongoose')
mongoose.connect('mongodb://user_latihan:123456@localhost:27017/latihan?authSource=admin',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})


//=======> Costumer <==========//

// const costumerSchema = new mongoose.Schema({

//   username : {
//     type: String,
//     unique : true
//   },
//   email : {
//     type: String,
//     validate: {
//       validator: function(v){
//         return/^\S+@\S+$/.test(v);
//       },
//       message: props => `${props.value} is not valid email`
//     },
//   },
// })
//   const Costumer = mongoose.model ('Costumer', costumerSchema);

//   const db = mongoose.connection
//   db.on('error', console.error.bind(console, 'connection error:'))
//   db.once('open', async ()=>{
//   // Untuk Validasi
//   try {
//     const newCostumer = await Costumer.create({
//       username : 'Athayya Carissa',
//       email : 'athayya@carissa.com'
//     })
    
//     console.log(newCostumer)
    
//   } catch (error) {
//     console.log(error.message)}

// })


//=======> Product <==========//

const productSchema = new mongoose.Schema({
  name : {
    type: String,
    required : true,
    // minlength: 5,
    // maxlength: 10,
    enum : ['Monitor', 'Mouse', 'Keyboard']
  },

  price: {
    type: Number, 
    required : true,
    min: 1000,
    max: 1000000,
  },
  stock: {
    type: Number, 
    required : true,
    min: 1,
    max: 1000,
    default: 1
  },
  status: { type: Boolean, default: true},
})

const Product = mongoose.model ('Product', productSchema);


const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', async ()=>{

//   //const products = await Product.findOne({_id: '60c0ee1d8dcac291ebcc07b9'});

//   // =======================================> perintah untuk menambahkan data
//   // const addProduct = await Product.create({
//   //   name: 'CPU',
//   //   price: 500000,
//   //   stock: 20,
//   //   status: true
//   // })
//   // console.log(addProduct);

//   // =======================================> perintah untuk modifikasi data
//   // await Product.updateOne(
//   //   {_id: '60c0ee1d8dcac291ebcc07ba'},
//   //   {status: true}
//   // ) 

//   //perintah untuk hapus data berdasarkan ID
//   // await Product.deleteOne(
//   //     {_id: '60e908b536a5f30c95c48117'}
//   //   ) 

//   // =====================================> Untuk Validasi
//   try {
//   const newProduct = await Product.create({
//     name: 'D',
//     price: 1,
//     stock: 0,
//     status: true
//   })
//   console.log(newProduct)

//   } catch (error) {
//     console.log(error.message)}

// ============================> Query untuk mencari produk
const list_products = await Product.find()
.select('name stock')
.where({'stock':{ $gte: 5}})
.limit(3)
.sort({stock: -1})
.exec()
console.log(list_products)

})