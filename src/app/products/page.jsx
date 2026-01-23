
import AllProducts from '@/components/home/AllProducts';
import React from 'react';

export const metadata = {
    title:"All Products",
    description: "Your Look is our concern",
  };

const page = () => {
    return (
        <div>
            <AllProducts></AllProducts>
        </div>
    );
};

export default page;