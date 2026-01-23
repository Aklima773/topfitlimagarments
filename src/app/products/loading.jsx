import ProductSkeleton from '@/components/skeleton/ProductSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div>

            {
                [...Array(8)].map((_,index)=>{
                    <ProductSkeleton key={index}></ProductSkeleton>

                })
            }
            
        </div>
    );
};

export default loading;