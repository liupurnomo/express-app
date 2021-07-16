const conn=require("mongodb").MongoClient;
const connectionString="mongodb://user_latihan:123456@localhost:27017?authSource=admin"; 

conn.connect(connectionString, {useUnifiedTopology:true},
   (error,client)=>{
     if (error) return console.error(error)
       console.log ("Server database tersambung!");
   }
  );