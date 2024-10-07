import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();  // Load the .env file

const dbConnection = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('MongoDB URI is not defined in .env file');
    }

    await mongoose.connect(uri);  // No need for deprecated options
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Database connection error:', error.message);
    process.exit(1);  // Stop the server on error
  }
};

export default dbConnection;
