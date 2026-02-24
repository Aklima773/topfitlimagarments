import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbname = process.env.DBNAME;

if (!uri) throw new Error("MONGODB_URI is missing");
if (!dbname) throw new Error("DBNAME is missing");

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use global to preserve connection across hot reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: false,  // ✅ Disable strict to allow all collection methods
        deprecationErrors: false,
      },
    });
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, create new client
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: false,
      deprecationErrors: false,
    },
  });
  clientPromise = client.connect();
}

export const collections = {
  PRODUCT: "products",
  USERS: "users",
  CART: 'cart',
  ORDER: 'order',
};

export async function dbconnect(cname) {
  try {
    const client = await clientPromise;
    const db = client.db(dbname);
    const collection = db.collection(cname);
    return collection;  // ✅ Explicitly return collection
  } catch (error) {
    console.error('dbconnect error:', error);
    throw error;
  }
}
