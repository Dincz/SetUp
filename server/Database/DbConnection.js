import mongoose  from "mongoose";


const connectionToDb = async() =>{
    try{
        console.log(process.env.MONGODB_URL);
    const { connection } = await mongoose.connect(
        process.env.MONGODB_URL 
    );
    if(connection){
        console.log(`Connected to Db:${connection.host}`);
    }
}catch(e){
    console.log(e);
    process.exit(1);
}
}

export default connectionToDb;