import mongoose from "mongoose";

export const connect=async()=>{
    
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/MulterDemo', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    } catch (error) {
        console.log('Error connecting to database');
    }
}