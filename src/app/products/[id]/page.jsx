import { getSingleProducts } from "@/actions/server/product";
import CartButtons from "@/components/buttons/CartButtons";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default async function ProductDetails({ params }) {
   const resolvedParams = await params; // unwrap the Promise
  const { id } = resolvedParams;



  const product = await getSingleProducts(id);


  if (!product) return <p>Product not found</p>;

  const serializedProduct = {
  ...product,
  _id: product._id ? product._id.toString() : id,
};

  const discountedPrice = product.discount
    ? Math.round(product.price - (product.price * product.discount) / 100)
    : product.price;

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-8">
        <div className="left-side">
          <h1 className="text-3xl font-bold text-accent">{product.title}</h1>
          <h2 className="text-xl text-gray-500">{product.bangla}</h2>
        </div>

        <div className="right-side">
          <CartButtons
            product={serializedProduct}
          />
        </div>
      </div>

      {/* Image */}
      <div className="w-full h-80 relative bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Price & Ratings */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-primary">৳{discountedPrice}</span>
          {product.discount && (
            <span className="line-through text-gray-400">৳{product.price}</span>
          )}
        </div>
        <div className="flex items-center gap-1 text-sm">
          <FaStar className="text-yellow-400" />
          <span className="font-semibold">{product.ratings}</span>
          <span className="text-gray-400">({product.reviews} reviews)</span>
        </div>
      </div>

      {/* Info List */}
      <ul className="list-disc pl-5 space-y-1 text-gray-700">
        {product.info.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      {/* Description */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Product Description</h3>
        <p className="text-gray-600 whitespace-pre-line">{product.description}</p>
      </div>

      {/* Q&A */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Questions & Answers</h3>
        <div className="space-y-2">
          {product.qna.map((q, idx) => (
            <div key={idx} className="border p-3 rounded-lg bg-gray-50">
              <p className="font-semibold">{q.question}</p>
              <p className="text-gray-700">{q.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
