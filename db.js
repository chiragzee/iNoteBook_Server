const mongoose = require('mongoose');
//onst mongoURI = "mongodb+srv://iNotebook:ChiragMongoOne@cluster1.nkuimsa.mongodb.net/"
const mongoURI = "mongodb+srv://iNotebook:iNotebook@inotebook.mfo9ybn.mongodb.net/?appName=iNotebook"

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("connected to Mongo successfully");
  } catch (error) {
    console.log("error connecting to Mongo:", error);
  }
}

module.exports = connectToMongo;
