import dotenv from 'dotenv';
import app from './app.js';
import MongoDbConnection from './db/connectDB.js';

dotenv.config();


MongoDbConnection().then(()=>{
    app.listen(process.env.PORT || 5000,()=>{
        console.log(`connected to port ${process.env.PORT}`)
    })
    console.log("connected to mongoDB server!!")
})
.catch((error)=>{
    console.log("MongoDB connection Failed", error)
})