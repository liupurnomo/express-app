const MongoClient = require("mongodb").MongoClient;
const connectionString="mongodb://user_latihan:123456@localhost:27017?authSource=admin";

(async() => {
  try {
    const client=await MongoClient.connect(connectionString, {useUnifiedTopology: true})
    const db = client.db('latihan');
    const mahasiswa= await db.collection('mahasiswa').find().toArray();
    console.log(mahasiswa);
  } catch (error) {
    console.error(error);
  }
})();