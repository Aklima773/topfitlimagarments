"use server"

import { collections, dbconnect } from "@/lib/dbconnect";
import bcrypt from "bcryptjs"

export const postUser=async(payload)=>{

    const {email,password,name} =payload;
    
    //check payload
    if(!email || !password) return null;
    
//check user
const connectUser = await dbconnect(collections.USERS);
const isExist = await connectUser.findOne({email});

if(isExist){
    return null;
}

//create user

const newUser ={
    provide: "credentials",
    name,
    email,
    password: await bcrypt.hash(password, 14),
    role:"user"
}

//insert user
const getUser =await dbconnect(collections.USERS);
const result =await getUser.insertOne(newUser);

if(result.acknowledged){
    return{
        ...result, 
        insertedId: result.insertedId.toString(),
    }
}
}

export const loginUser = async (payload) =>{

    const {email, password} =payload;
    if(!email || !password) return null;

    const connectsUser = await dbconnect(collections.USERS);
    const user= await connectsUser.findOne({email});

     if (!user || !await bcrypt.compare(password, user.password)) {
    return null; // ✅ Triggers 401 (expected)
  }

    return {
        id: user._id.toString(),        // ✅ Convert ObjectId → string
        email: user.email,
        name: user.name || user.username
    };

    
}