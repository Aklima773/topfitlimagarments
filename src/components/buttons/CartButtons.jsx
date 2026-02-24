"use client";
import { handleCart } from '@/actions/server/cart';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import Swal from 'sweetalert2';

const CartButtons = ({product}) => {

     console.log(product);

    const { data: session ,status} = useSession();
       const path = usePathname()
    const router = useRouter();
    const[isLoading, setIsLoading] = useState(false)
    const isLogin = status === "authenticated";
 

    const handleAdd2cart =async () =>{
        setIsLoading(true)
   if (!isLogin) {
    router.push(`/login?callbackUrl=${encodeURIComponent(path)}`);
    setIsLoading(false);
    return;
  }

  if (!product?.id) {
    Swal.fire("Error!", "Product ID missing", "error");
    setIsLoading(false);
    return;
  }

  const result = await handleCart({ product, inc: true });
  
  if (result.success) {
    Swal.fire("Success!", `${product.title} added to cart!`, "success");
  } else {
    Swal.fire("Oops!", "Something went wrong", "error");
  }
  
  setIsLoading(false);
};
        

    return (
        <div>
             <button disabled={status === "loading" || isLoading} onClick={handleAdd2cart} className="btn btn-primary">
              
                {isLoading ? (
        <>
          Adding... <FaCartPlus size={20} />
        </>
      ) : (
        <>
          Add To Cart <FaCartPlus size={20} />
        </>
      )}
              </button>
        </div>
    );
};

export default CartButtons;