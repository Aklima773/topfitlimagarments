import Link from 'next/link';
import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { getProducts } from '@/actions/server/product';
import ProductCards from '../cards/ProductCards';
import TypingHeading from '../typingHeading/TypingHeading';

const Products = async() => {

    const products = (await getProducts()) || [];
    return (
        <div>
            <div className="products-content w-11/12 mx-auto space-y-6">

                <div className="upper-content flex flex-col md:flex-row justify-between items-start md:items-center space-y-6">

                    <div className="left-side space-y-6 ">

                        <TypingHeading textAlign='text-left'>FEATURED PRODUCTS</TypingHeading>
                        <p className='text-sm text-info font-normal tracking-wider'>High-quality garments built to elevate your styleand represent<br/>  your brand with confidence.</p>

                    </div>

                    <div className="right-side">
                    <Link href={"/allproducts"}>
                    <button className='btn btn-primary text-xl cursor-pointer'>Explore More<FaArrowCircleRight className="" size={20} />
                    </button></Link> 
                    </div>

                </div>


                <div className="product-cards grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-8">

{
    products.map((product)=>(
        <ProductCards key={product.title} product={product}></ProductCards>
    ))
}

                </div>
            </div>
        </div>
    );
};

export default Products;