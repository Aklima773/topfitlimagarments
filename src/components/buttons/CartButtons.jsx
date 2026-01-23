"use client";
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const CartButtons = ({product}) => {

    console.log(product._id);

    const isLogin = false;
    const router = useRouter();
    const path = usePathname()

    const add2cart = () =>{
        if (isLogin) alert(product._id);
        else{
      router.push(`/login?callbackUrl=${path}`);
        }
        
    }
    return (
        <div>
             <button onClick={add2cart} className="btn btn-primary">Add To Cart <FaCartPlus className="" size={20} /></button>
        </div>
    );
};

export default CartButtons;