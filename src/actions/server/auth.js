"use server"

import { collections, dbconnect } from "@/lib/dbconnect";
import bcrypt from "bcryptjs"

export const postUser=async(payload)=>{

    const {email,password,name} =payload;
    
    //check payload
    if(!email || !password) return null;
    
//check user
const isExist = await dbconnect(collections.USERS).findOne({email});
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
const result =await dbconnect(collections.USERS).insertOne(newUser);

if(result.acknowledged){
    return{
        ...result, 
        insertedId: result.insertedId.toString(),
    }
}
}