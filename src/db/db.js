import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(``);
  } catch (error) {
    console.log('DB connection error', error);
    process.exit(1);
  }
};
