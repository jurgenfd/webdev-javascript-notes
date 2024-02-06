//connect to mongodb
const mongoose = require('mongoose');

//from the atlas docs:
const uri = "mongodb+srv://mongo-admin:B!n2Z&7Vn4Q*^E@default.qiua5ku.mongodb.net/?retryWrites=true&w=majority";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await mongoose.disconnect();
  }
}

module.exports = async function(req, res, next) {
  await run().catch(console.dir);
  next();
}
