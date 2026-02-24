"use server";

import { redirect } from 'next/navigation';  // ✅ REQUIRED
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { clearCart, getCart } from "./cart";
import { collections, dbconnect } from "@/lib/dbconnect";

export async function createOrder(formData) {
  try {
    const session = await getServerSession(authOptions);
    const user = session?.user;
    
    if (!user) {
      return { success: false, error: "User not authenticated" };
    }

    const cart = await getCart();
    if (!cart?.length) {  // ✅ Fixed: cart.items → cart.length
      return { success: false, error: "Cart is empty" };
    }

    const payload = Object.fromEntries(formData);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const orderData = {
      userId: user.id,
      userEmail: user.email,
      ...payload,
      cartItems: cart,  // ✅ Fixed: cart.items → cart
      subtotal,
      shipping: 50,
      total: subtotal + 50,
      status: "pending",
      createdAt: new Date(),
    };

   const orderCollection = await dbconnect(collections.ORDER);
    
    const insertResult = await orderCollection.insertOne(orderData);
    
    if (insertResult.insertedId) {
      await clearCart();
      redirect('/orders?success=true');  // ✅ Perfect - execution stops here
      // No code after redirect needed ✅
    }

    return { success: false, error: "Failed to create order" };
    
  } catch (error) {
    console.error("Order creation error:", error);
    return { success: false, error: "Failed to create order" };
  }
}
