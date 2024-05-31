import mongoose from "mongoose";
import { DB_Name } from '../constants.js';

const MongoDbConnection = async ()=>{
    try {
       const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
       console.log(connection.connection.host);

        
    } catch (error) {
        console.error({message:"Error in mongodb Connection"},error);
        process.exit(1);
    }
}

export default MongoDbConnection