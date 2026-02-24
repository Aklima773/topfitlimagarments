"use server";

import { collections, dbconnect } from "@/lib/dbconnect";
import { ObjectId } from "mongodb";

// 🔹 Get All Products
export const getProducts = async () => {
  try {
    // ✅ FIRST await dbconnect
    const collection = await dbconnect(collections.PRODUCT);

    const allproduct = await collection.find({}).toArray();

    const products = allproduct.map((product) => ({
      id: product._id.toString(),
      ...product,
      _id: undefined, // remove original _id
    }));

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// 🔹 Get Single Product
export const getSingleProducts = async (id) => {
  try {
    if (!id || typeof id !== "string" || id.length !== 24) {
      return null;
    }

    const collection = await dbconnect(collections.PRODUCT);

    const product = await collection.findOne({
      _id: new ObjectId(id),
    });

    if (!product) return null;

    return {
      ...product,
      _id: product._id.toString(),
    };
  } catch (error) {
    console.error("Error fetching single product:", error);
    return null;
  }
};
