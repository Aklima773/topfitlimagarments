"use server";

import { authOptions } from "@/lib/authOptions";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { cache } from "react";

const { dbconnect, collections } = require("@/lib/dbconnect");

// ✅ DEBUG: Check what's actually returned
async function getCartCollection() {
  console.log("🔍 collections.CART:", collections.CART);
  const collection = dbconnect(collections.CART);
  console.log("🔍 dbconnect result:", !!collection, typeof collection);
  console.log("🔍 Has findOne?", typeof collection?.findOne);
  return collection;
}

export const handleCart = async ({ product, inc = true }) => {
  try {
    const session = await getServerSession(authOptions);
    const user = session?.user;

    if (!user || !product?.id) {
      return { success: false };
    }

    const cartCollection = await getCartCollection();
    
    if (!cartCollection?.findOne) {
      console.error("❌ INVALID COLLECTION");
      return { success: false };
    }

    const query = { email: user.email, productId: product.id };
    const isAdded = await cartCollection.findOne(query);

    if (isAdded) {
      const result = await cartCollection.updateOne(query, {
        $inc: { quantity: inc ? 1 : -1 }
      });
      revalidatePath("/cart");
      return { success: Boolean(result.modifiedCount) };
    } else {
      const result = await cartCollection.insertOne({
        productId: product.id,
        email: user.email,
        title: product.title,
        quantity: 1,
        image: product.image,
        price: product.price - (product.price * product.discount) / 100,
        username: user.name
      });
      revalidatePath("/cart");
      return { success: result.acknowledged };
    }
  } catch (error) {
    console.error("🔥 CART ERROR:", error);
    return { success: false };
  }
};

export const getCart = cache(async () => {
  try {
    const session = await getServerSession(authOptions);
    const user = session?.user;
    
    if (!user) return [];

    const cartCollection = await getCartCollection();
    
    if (!cartCollection?.find) {
      console.error(" GET CART COLLECTION INVALID");
      return [];
    }

    const result = await cartCollection.find({ email: user.email }).toArray();
    return result;
  } catch (error) {
    console.error("GET CART ERROR:", error);
    return [];
  }
});

export const deleteItemsFromCart = async (productId) => {
  try {
    const session = await getServerSession(authOptions);
    const user = session?.user;

    if (!user) return { success: false };

    const cartCollection = await getCartCollection();
    
    const result = await cartCollection.deleteOne({ 
      email: user.email, 
      productId 
    });

    // if(Boolean(result.deletedCount) ){
    //  revalidatePath("/cart");
    // }
   
    return { success: Boolean(result.deletedCount) };
  } catch (error) {
    console.error("🔥 DELETE ERROR:", error);
    return { success: false };
  }
};

//increase button

export const increaseItemDb = async (id, quantity,product, inc=true) => {
    const {user} =(await getServerSession(authOptions)) || {};
    if (!user) return {success: false};

    if(quantity >=10){
        return {success: false, messase: "You cant buy 10 products at a time"};
    }

    const query = {_id: new ObjectId(id)};
   const updateData = {
    $inc:{
        quantity: 1,
    }
   };
    const cartCollection = await getCartCollection();
   const result = await cartCollection.updateOne(query,updateData);

   return {success: Boolean(result.modifiedCount)};
};


export const decreaseItemDb = async (id, quantity,product, inc=true) => {
    const {user} =(await getServerSession(authOptions)) || {};
    if (!user) return {success: false};

    if(quantity <= 1){
        return {success: false, messase: "Quantity cant be empty"};
    }

    const query = {_id: new ObjectId(id)};
   const updateData = {
    $inc:{
        quantity: -1,
    }
   };
    const cartCollection = await getCartCollection();
   const result = await cartCollection.updateOne(query,updateData);

   return {success: Boolean(result.modifiedCount)};
}


export const clearCart = async ()=>{
  const {user} = (await getServerSession(authOptions)) || {};

  if(!user) return {success: false};

   const cartCollection = await getCartCollection();
  const query ={email:user?.email};
  const result = await cartCollection.deleteMany(query);
    return {success: Boolean(result.deletedCount)};

}