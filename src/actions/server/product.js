"use server";

import {collections, dbconnect} from "@/lib/dbconnect";
import { ObjectId } from "mongodb";


// calling all product 

export const getProducts =async()=>{
    const products = await dbconnect(collections.PRODUCT).find().toArray();

    return products;
}

export const getSingleProducts = async(id)=>{
    if (!id || typeof id !== "string" || id.length !== 24) {
        // invalid ID
        return null;
      }

    const query ={_id: new ObjectId(id)};

    const product = await dbconnect(collections.PRODUCT).findOne(query);

      if (!product) return null;

    return {...product,
        _id: String(product._id), };
}