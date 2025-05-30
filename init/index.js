const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../Models/listings");
const DB_URL = "mongodb://127.0.0.1:27017/GoHavenlyDatabase";

// Connect to MongoDB
async function main() {
  try {
    await mongoose.connect(DB_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}
main();

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "6827515e882473c562f57fbe",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
