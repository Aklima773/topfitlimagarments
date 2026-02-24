import { getCart } from '@/actions/server/cart';
import Checkout from '@/components/home/Checkout';
import React from 'react';

const checkout = async () => {

     const cartItems = await getCart();
    
      //  Convert MongoDB Objects to plain JS objects
      const formatedItems = cartItems.map(item => ({
        id: item._id.toString(),  // ObjectId → string
        productId: item.productId,
        email: item.email,
        title: item.title,
        quantity: item.quantity,
        image: item.image,
        price: item.price,
        username: item.username
      }));
    return (
        <div>
                         <div className="mx-auto text-center mb-12">
          <h2 className="text-4xl py-4 font-bold border-l-8 border-primary pl-8 inline-block">
            Check Out Page
          </h2>
   
        </div>
        <Checkout cartItems={formatedItems}></Checkout>
        </div>
    );
};

export default checkout;