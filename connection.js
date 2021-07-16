const mongoose = require('mongoose')
mongoose.connect('mongodb://user_latihan:123456@localhost:27017/latihan?authSource=admin',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', ()=>{
  console.log("Server database tersambung!")
})

// const MongoClient = require("mongodb").MongoClient;
// const connectionString="mongodb://user_latihan:123456@localhost:27017?authSource=admin";

// const client=new MongoClient(connectionString,{useUnifiedTopology:true});
// (async() => {
//   try {
//     await client.connect();
//   } catch (error) {
//     console.error(error);
//   }
// })();

// module.exports=client;