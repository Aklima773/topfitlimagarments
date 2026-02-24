import { getCart } from '@/actions/server/cart';
import Image from 'next/image';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import Link from 'next/link';
import CartCard from '@/components/cards/CartCard';
import Cart from '@/components/home/Cart';

const CartPage = async () => {
  const cartItems = await getCart();

  // FIX: Convert MongoDB Objects to plain JS objects
  const plainCartItems = cartItems.map(item => ({
    id: item._id.toString(),  // ObjectId → string
    productId: item.productId,
    email: item.email,
    title: item.title,
    quantity: item.quantity,
    image: item.image,
    price: item.price,
    username: item.username
  }));





 
  return (
<div className="min-h-screen bg-base-200 py-12">
  {/* ✅ SINGLE PERFECTLY CENTERED CONTAINER */}
  <div className="max-w-4xl mx-auto px-6">
    
    {/* Title - CENTERED */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl py-6 font-bold border-l-8 border-primary pl-8 inline-block bg-base-100 rounded-2xl shadow-xl px-8">
        My Cart
      </h2>
    </div>

    {/* ✅ CART COMPONENT - DEAD CENTER */}
    <div className="w-full mx-auto">
      <Cart CartItems={plainCartItems} key={plainCartItems.id} />
    </div>
  </div>
</div>


  );
};

export default CartPage;
