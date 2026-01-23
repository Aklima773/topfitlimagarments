import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import CartButtons from "../buttons/CartButtons";

const ProductCard = ({ product }) => {
  const {
    _id,
    title,
    image,
    price,
    discount,
    description,
    ratings,
    reviews,
  } = product;

  const discountedPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      
      {/* Image */}
      <div className="w-full h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
  <Image
    src={image}
    alt={title}
    width={300}
    height={200}
    className="object-contain"
   
   
  />
        {discount && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {discount}% OFF
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-bold text-accent leading-snug">
          {title}
        </h3>
    

        {/* Rating */}
        <div className="flex items-center gap-1 text-sm">
          <FaStar className="text-yellow-400" />
          <span className="font-semibold">{ratings}</span>
          <span className="text-gray-400">({reviews} reviews)</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-1">
          {description}
        </p>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-primary">
            ৳{discountedPrice}
          </span>
          {discount && (
            <span className="text-sm text-gray-400 line-through">
              ৳{price}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          
          <Link href={`/products/${_id}`} className="w-1/2 border border-primary text-accent rounded-lg py-2 text-sm font-semibold text-sm font-semibold btn btn-primary"><button className=""> View Details</button></Link>

    
          
         <CartButtons product={product}></CartButtons>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
