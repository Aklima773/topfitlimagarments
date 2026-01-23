import React from 'react';

const ProductSkeleton = () => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
          
          {/* Image Skeleton */}
          <div className="w-full h-56 bg-gray-200" />
    
          {/* Content */}
          <div className="p-4 space-y-3">
            
            {/* Title */}
            <div className="h-5 bg-gray-200 rounded w-3/4" />
    
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded w-16" />
              <div className="h-4 bg-gray-200 rounded w-20" />
            </div>
    
            {/* Description */}
            <div className="h-4 bg-gray-200 rounded w-full" />
    
            {/* Price */}
            <div className="flex gap-3">
              <div className="h-6 bg-gray-200 rounded w-20" />
              <div className="h-4 bg-gray-200 rounded w-12" />
            </div>
    
            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <div className="w-1/2 h-10 bg-gray-200 rounded-lg" />
              <div className="w-1/2 h-10 bg-gray-200 rounded-lg" />
            </div>
          </div>
        </div>
      );
};

export default ProductSkeleton;