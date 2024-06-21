// import mongoose from 'mongoose';


// let IsConnected: boolean = false;


// export const connectToDatabase = async() =>{
//     mongoose.set('strictQuery',true);

//     if(!process.env.MONGODB_URL) return console.log('MISSING MONGODB_URL')


//         if(IsConnected){
//             return console.log('Already connected to database');
//         }

//         try {
//             await mongoose.connect(process.env.MONGODB_URL,{
//                 dbName:'devshare'

//             })

//             IsConnected=true;
//             console.log('Connected to database');
//         } catch (error) {
//             console.log('connection to db failed',error)
//         }
// }


import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    console.log("MISSING MONGODB_URL");
    throw new Error("MISSING MONGODB_URL");
  }

  if (isConnected) {
    console.log("Already connected to database");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "devshare",
    });
    isConnected = true;
    console.log("Connected to database");
  } catch (error) {
    console.log("Connection to DB failed", error);
    throw new Error("Connection to DB failed");
  }
};
