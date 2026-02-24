"use client";

import React, { useMemo, useState } from 'react';
import CartCard from '../cards/CartCard';
import Link from 'next/link';

const Cart = ({CartItems=[]}) => {
    const [items, setItems] =useState(CartItems);

    const totalItems = useMemo(()=>items.reduce((sum,item)=> sum + item.quantity, 0), [items]);


    //total price calculation
     const totalAmount= useMemo(
      ()=>items.reduce((sum,item)=> sum + (item.price * item.quantity ), 0),  [items]);

       // Calculate total using plain data
//   const totalAmount = parseFloat(
//   plainCartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
//     .toFixed(2)
// );

    const removeItem =(id)=>{
        setItems(prevItems=> prevItems.filter(item=>item.productId != id))

};



const updateQuantity=(id,q)=>{
    setItems((prevItems)=> prevItems.map((item)=> item.id == id ? {...item, quantity: q} : item));


}


 if (!items || items.length === 0) {
    return (
      <div className="min-h-screen bg-base-200 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
   
            <div className="bg-base-100 p-12 rounded-2xl shadow-xl max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-base-200 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-base-content/50" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 2.5M7 13l-1.5 2.5M16 15H9m0 0l-1.5-2.5M9 15l-1.5 2.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">No Items</h3>
              <p className="text-base-content/60 mb-8">Your cart is empty</p>
              <Link href="/" className="btn btn-primary">Start Shopping</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

    return (
        <div>
  <div className='flex justify-between items-center'>     
        <div className='bg-gray-300 p-2 rounded-lg mb-5 shadow-md px-3'>
                    <p className="py-3 text-sm md:text-xl">
            <span className="font-bold text-green-700">
              {CartItems.length}
            </span>{" "}
            Items Found in the Cart
          </p>
           </div>
<div className='bg-gray-300 p-2 rounded-lg mb-5 shadow-md px-3'>
    <p className='py-3 text-sm md:text-xl '>Total Qantity: <span className='font-bold text-green-700'> {totalItems}</span></p>
</div>
</div>
<div className='flex flex-col md:flex-row justify-between items-start gap-20 '>

            
                   <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <CartCard key={item.id} item={item} removeItem={removeItem} updateQuantity={updateQuantity} /> 
            ))}
          </div>

             <div className="card bg-base-100 shadow-2xl lg:sticky lg:top-24 h-fit">
            <div className="card-body p-4">
              <h3 className="card-title text-2xl font-bold mb-8">Order Summary</h3>
              <div className="space-y-4 mb-8 text-lg">
                  <div className="space-y-3 mb-6">
            {items.map((item, index) => (
              <div key={item._id?.toString() || `item-${index}`} className="flex justify-between items-center py-2">
            <div className='flex justify-between items-center gap-10'>  
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-base-300 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold">x{item.quantity}</span>
                  </div>
                  <span className="text-sm">{item.title}</span>
                </div>
                <div>
  <span className="font-bold text-sm">
                  {(item.price * item.quantity).toLocaleString()}
                </span>
                </div></div>
              
              </div>
            ))}
          </div>
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>{totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base-content/70">
                  <span>Delivery Charge:</span>
                  <span>{50}</span>
                </div>
                <hr className="border-base-300" />
                <div className="flex justify-between text-3xl font-bold text-primary">
                  <span>Total:</span>
                  <span>{(totalAmount + 50).toFixed(2)}</span>
                </div>
              </div>
              <Link href={"/checkout"} className="btn btn-primary btn-lg w-full mb-4 text-lg font-bold h-14" >
               Confirm Order
              </Link>
              <Link href="/" className="btn btn-outline btn-lg w-full">
                Continue Shopping
              </Link>
            </div>
          </div>
</div>

        </div>
    );
};

export default Cart;