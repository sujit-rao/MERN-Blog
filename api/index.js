import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(
    () => {console.log("Mongo-Db is connected")
})
.catch((err) => {
    console.log("Eroor connecting with MongoDb")
});

const app= express();

app.listen(3000, () => {
    console.log("Runing on 3000")
})

app.use('/api/user', userRoutes)