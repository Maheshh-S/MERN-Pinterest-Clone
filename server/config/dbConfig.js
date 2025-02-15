const mongoose = require("mongoose");
require("dotenv").config(); // Ensure .env file is loaded

const URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/pinterest_clone";

const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected Successfully!");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1); // Exit if MongoDB fails
  }
};

module.exports = connectDB;
