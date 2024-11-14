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
