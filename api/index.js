import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import listingRouter from './routes/listing.route.js';
import path from 'path';
import User from './models/user.models.js';



dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

mongoose.connect("mongodb+srv://siddhartha:3gFHOl7isG8stdJs@mern-sketchsymphony.wflf0h1.mongodb.net/?retryWrites=true&w=majority&appName=mern-SketchSymphony").then(()=>{
    console.log('connected');

}).catch((err)=> {console.log(err);});

app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)
app.use('/api/listing',listingRouter);

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/dist/index.html'));
});

// app.get('/users', async (req, res) => {
//     try {
//         const users = await User.find({}, 'username email avatar'); // Fetch username, email, and avatar fields
//         res.json(users);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

//middleware for handling errors
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,

    });
});

app.listen(5000, ()=>{
    console.log("Server is listening!!!");
})