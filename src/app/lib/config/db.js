import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB Connected");
    } catch (error) {
        console.error("DB connection failed:", error.message);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
