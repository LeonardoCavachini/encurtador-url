import { config } from "../config/Constants";
import mongoose from "mongoose";

export class MongoConnection {
    public async connect(): Promise<void> {
        try {
            await mongoose.connect(config.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true})
            console.log('DataBase connected')
        }catch(e){
            console.error(e.message);
            process.exit(1)
        }
    }
}
