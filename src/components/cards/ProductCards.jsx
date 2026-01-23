import Image from "next/image";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const {
    title,
    bangla,
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
      <div className="relative w-full h-56 bg-gray-100">
        <Image
        width={200}
        height={180}
          src={image}
          alt={title}
          className="object-contain p-4"
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
        <p className="text-sm text-gray-500">{bangla}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 text-sm">
          <FaStar className="text-yellow-400" />
          <span className="font-semibold">{ratings}</span>
          <span className="text-gray-400">({reviews} reviews)</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2">
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
          <button className="w-1/2 border border-primary text-accent rounded-lg py-2 text-sm font-semibold btn btn-primary">
            View Details
          </button>
          <button className="w-1/2 bg-primary text-accent rounded-lg py-2 text-sm font-semibold btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
