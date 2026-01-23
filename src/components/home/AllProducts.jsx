import Link from 'next/link';
import React from 'react';
import TypingHeading from '../typingHeading/TypingHeading';
import ProductCards from '../cards/ProductCards';
import { getProducts } from '@/actions/server/product';




const AllProducts = async() => {

    const products = (await getProducts()) || []
    return (
        <div>
            <div className="products-content w-11/12 mx-auto space-y-6">

                <div className="upper-content flex flex-col md:flex-col justify-center items-center md:items-center space-y-6">

                   
<div>
<TypingHeading textAlign='text-center'>AVAILABLE ALL PRODUCTS</TypingHeading>
</div>
                    
                   <div>
                   <p className='text-sm text-info font-normal tracking-wider'>High-quality garments built to elevate your styleand represent your brand with confidence.</p>
                    </div>     
                        

                   

                 

                </div>


                <div className="product-cards grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-8">

{
    products.map((product)=>(
        <ProductCards key={product._id} product={product}></ProductCards>
    ))
}

                </div>
            </div>
        </div>
    );
};

export default AllProducts;