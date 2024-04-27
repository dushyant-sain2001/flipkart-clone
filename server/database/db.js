import mongoose from "mongoose";
export const Connection = async () =>{
    const URL = 'mongodb://localhost:27017/Ecommerce-web';
    try {
       await mongoose.connect(URL);
       console.log("Connected TO database");
    } catch (error) {
        console.log('error while connecting to database', error.message);
    }
}

export default Connection;

//ZVDbEEhGK9q3U4Tf