const conn=require("mongodb").MongoClient;
const connectionString="mongodb://user_latihan:123456@localhost:27017?authSource=admin"; 

conn.connect(connectionString, {useUnifiedTopology: true})
.then(client => {
  console.log("Server databases connect!")
})
.catch(error => console.error(error))