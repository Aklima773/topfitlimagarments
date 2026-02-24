"use client";

import { decreaseItemDb, deleteItemsFromCart, increaseItemDb } from '@/actions/server/cart';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const CartCard = ({item, removeItem, updateQuantity}) => {
    const {title,image,quantity,price,id} = item;

    const [loading, setLoading] = useState(false)

 const handleDeleteCart = () => {
  setLoading(true);
  Swal.fire({
    title: "Are You Sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#ef4444",
    cancelButtonColor: "#6b7280",
    confirmButtonText: "Yes, Remove it!",
    buttonsStyling: false,
    customClass: {
      confirmButton: 'btn btn-error',
      cancelButton: 'btn btn-ghost'
    }
  }).then(async (result) => {
    if (result.isConfirmed) {
    
      const res = await deleteItemsFromCart(item.productId); 
    
    
      if (res.success) {
          removeItem(item.productId)
      ;
        Swal.fire("Deleted!", "Item removed from cart", "success");
      } else {
        Swal.fire("Error!", "Failed to delete item", "error");
      }
    }
      setLoading(false)
  });
};


const onIncrease=async ()=>{
setLoading(true);
  const result = await increaseItemDb(id,quantity);

  if(result.success){
    Swal.fire("success", "Quantity increased","success",
       "bottom-end",
    )
    updateQuantity(id, quantity + 1);
  }

  setLoading(false)

};

const onDecrease=async ()=>{


  setLoading(true)
  const result = await decreaseItemDb(id,quantity);

  if(result.success){
    Swal.fire("success", "Quantity decreased","success")
    updateQuantity(id, quantity - 1);
  }
  setLoading(false)

}
    return (
       <>
              <div key={item._id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
                <div className="card-body p-6 lg:p-8">
                  <div className="flex flex-col md:flex-row lg:flex-row gap-6 items-start">
                    {/* Image */}
                    <div className="flex-shrink-0 w-32 h-32 lg:w-40 lg:h-40">
                      <Image
                        src={image}
                        alt={item.title}
                        width={160}
                        height={160}
                        className="w-full h-full object-cover rounded-xl shadow-lg"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      {/* Title & Price */}
                      <div>
                        <h3 className="font-bold text-xl lg:text-2xl mb-2 line-clamp-2">
                          {title}
                        </h3>
                        <p className="text-2xl font-bold text-primary">
                          {price}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4">
                        <span className="font-semibold text-lg text-base-content/80 min-w-[70px]">
                          Quantity:
                        </span>
                        <div className="flex items-center gap-2 p-2 bg-base-200 rounded-xl">
                          <button onClick={onDecrease} className="btn btn-sm btn-circle btn-ghost hover:bg-base-300" disabled={quantity === 1 || loading}>
                            <FaMinus size={14} />
                          </button>
                          <span className="font-mono font-bold text-xl w-12 text-center px-3 py-1 bg-white rounded-lg shadow-sm">
                            {quantity}
                          </span>
                          <button onClick={onIncrease} className="btn btn-sm btn-circle btn-ghost hover:bg-base-300" disabled={quantity === 10 || loading}>
                            <FaPlus size={14} />
                          </button>
                        </div>
                      </div>



                      {/* Total & Remove */}
                      <div className="flex justify-between items-center pt-4 border-t border-base-300">
                        <span className="text-2xl font-bold text-success">
                          Total:{(price * quantity)}
                        </span>
                        <button onClick={handleDeleteCart} className="btn btn-sm btn-primary">
                          <FaTrash size={16} />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div></>
    );
};

export default CartCard;