// // server/config/db.js
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config(); // Load environment variables

// const connectDB = async () => {
//   try {
//     const { connection } = await mongoose.connect(
//       `mongodb+srv://techshravand:${process.env.DATABASE_PASSWORD}@enzigma.nwky1.mongodb.net/bankDB?retryWrites=true&w=majority&appName=Enzigma`,
//       { useNewUrlParser: true, useUnifiedTopology: true }
//     );

//     if (connection) {
//       console.log(`Connected to Database: ${connection.host}`);
//     }
//   } catch (error) {
//     console.error("MongoDB connection error:", error.message);
//     process.exit(1); // Exit the process with failure
//   }
// };

// module.exports = connectDB;

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(
      `mongodb+srv://techshravand:${process.env.DATABADE_PASSWORD}@enzigma.nwky1.mongodb.net/?retryWrites=true&w=majority&appName=Enzigma`
    );
    console.log(`Connected to Database: ${connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
