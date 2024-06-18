import mongoose from 'mongoose';


let IsConnected: boolean = false;


export const connectToDatabase = async() =>{
    mongoose.set('strictQuery',true);

    if(!process.env.MONGODB_URL) return console.log('MISSING MONGODB_URL')


        if(IsConnected){
            return console.log('Already connected to database');
        }

        try {
            await mongoose.connect(process.env.MONGODB_URL,{
                dbName:'devshare'

            })

            IsConnected=true;
            console.log('Connected to database');
        } catch (error) {
            console.log('connection to db failed',error)
        }
}