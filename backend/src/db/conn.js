const mongoose = require('mongoose');
require('dotenv').config({ path: './config.env' });

const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error('MONGODB_URI is not defined in the config.env file');
        }

        
        await mongoose.connect(uri);
        
        console.log('MongoDB connected successfully!'); 
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1); 
    }
};


connectDB();

module.exports = connectDB;
