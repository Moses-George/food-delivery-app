import mongoose, { ConnectOptions } from "mongoose";


const MONGODB_URI: string   = process.env.DB_URI || "";

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable'); 
}

/**
 *   Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially during
 * API Route usage.
 */

let cached = global.mongoose;

if (!cached) { 
    cached = global.mongoose = { conn: null, promise: null }
}

interface connectedOptions extends ConnectOptions {
    useNewUrlParser: boolean,
    useUnifiedTopology: boolean,
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn
    }

    const options: connectedOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } 

    if (!cached.promise) {

        cached.promise = await mongoose.connect(MONGODB_URI, options).then(mongoose => {
            return mongoose
        })
    }
    cached.conn = await cached.promise;
    console.log(cached.conn);
    return cached.conn
}


export default dbConnect;