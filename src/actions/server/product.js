"use server";

import {collections, dbconnect} from "@/lib/dbconnect";


export const getProducts =async()=>{
    const products = await dbconnect(collections.PRODUCT).find().toArray();

    return products;
}