"use client";

import { useState, useEffect, useTransition } from 'react';
import { useFormStatus } from 'react-dom';
import { useSession } from 'next-auth/react';
import { createOrder } from '@/actions/server/Order';
import Swal from 'sweetalert2';

const CheckoutPage = ({ cartItems: initialCartItems = [] }) => {
  const { data: session, status } = useSession();
  const [message, setMessage] = useState('');
  const [isPending, startTransition] = useTransition();
  const [cartItems, setCartItems] = useState(initialCartItems);

    useEffect(() => {
    setCartItems(initialCartItems);
  }, [initialCartItems]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success')) {
      Swal.fire({
        icon: 'success',
        title: 'Order Created Successfully!',
        text: 'Your cart has been cleared.',
        timer: 3000,
        timerProgressBar: true
      });
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  // ✅ FIXED: handleSubmit now properly receives FormData and passes it directly
// ✅ FIXED: handleSubmit now properly handles NEXT_REDIRECT
const handleSubmit = async (formData) => {

      setCartItems([]);
       setMessage('Processing your order...');

  startTransition(async () => {
    try {
      await createOrder(formData);

    } catch (error) {
      console.error('HandleSubmit error:', error);
      
      // ✅ HANDLE NEXT_REDIRECT SUCCESS CASE
      if (error.message?.includes('NEXT_REDIRECT')) {
        // Order was created successfully and server already redirected
         setMessage('Order created successfully!');
        await Swal.fire({
          icon: 'success',
          title: 'Order Created Successfully!',
          text: 'Redirecting to your orders...',
          timer: 2000,
          timerProgressBar: true
        });
        window.location.href = '/orders?success=true';
        return;
      }
      
      // Real errors
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please try again.'
      });
      setMessage('Submission failed');
    }
  });
};

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-base-100 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* LEFT SIDE: Checkout Form */}
        <form action={handleSubmit} className="card bg-base-200 shadow-xl p-8 order-2 lg:order-1">
          <h2 className="card-title text-2xl mb-8">Checkout Details</h2>
          
          {status === 'authenticated' && session?.user && (
            <div className="alert alert-info mb-6">
              <span>Logged in as: {session.user.email}</span>
            </div>
          )}

          {/* Billing Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {session?.user && (
              <>
                <input 
                  name="firstName" 
                  defaultValue={session.user.name?.split(' ')[0] || ''} 
                  placeholder="First Name *" 
                  className="input input-bordered w-full bg-base-100" 
                  required 
                  readOnly
                />
                <input 
                  name="lastName" 
                  defaultValue={session.user.name?.split(' ').slice(1).join(' ') || ''} 
                  placeholder="Last Name *" 
                  className="input input-bordered w-full bg-base-100" 
                  readOnly
                />
                <input 
                  name="email" 
                  type="email"
                  defaultValue={session.user.email || ''} 
                  placeholder="Email *" 
                  className="input input-bordered w-full bg-base-100" 
                  required 
                  readOnly
                />
              </>
            )}
            <input 
              name="phone" 
              placeholder="Phone (01XXXXXXXXX)" 
              className="input input-bordered w-full" 
              required 
            />
          </div>

          {/* Delivery Info */}
          <div className="mb-8">
            <h3 className="font-bold mb-4">Delivery Details</h3>
            <textarea 
              name="deliveryInfo" 
              placeholder="Additional Notes (Optional)" 
              className="textarea textarea-bordered w-full h-24 mb-4"
            />
          </div>

          {/* Shipping Address */}
          <div className="mb-8">
            <h3 className="font-bold mb-4">Shipping Address</h3>
            <textarea 
              name="address" 
              placeholder="Full Address (House, Road, Area) *" 
              className="textarea textarea-bordered w-full h-24 mb-4" 
              required 
            />
            <div className="grid grid-cols-2 gap-4">
              <input 
                name="city" 
                placeholder="City *" 
                className="input input-bordered w-full" 
                required 
              />
              <input 
                name="postalcode" 
                placeholder="Postal Code *" 
                className="input input-bordered w-full" 
                required 
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-8">
            <h3 className="font-bold mb-4">Payment Method</h3>
            <select 
              name="paymentMethod" 
              className="select select-bordered w-full mb-4" 
              required
            >
              <option value="">Select Payment Method</option>
              <option value="cod">Cash on Delivery (COD)</option>
              <option value="bkash">bKash</option>
              <option value="nagad">Nagad</option>
            </select>
          </div>

          <PayButton isPending={isPending} />
          
          {message && (
            <div className={`alert ${message.includes('success') ? 'alert-success' : 'alert-error'} mt-4`}>
              {message}
            </div>
          )}
        </form>

        {/* Order Summary - UNCHANGED */}
        <div className="card bg-base-200 shadow-xl p-8 order-1 lg:order-2 sticky top-12 h-fit">
          <h2 className="card-title text-2xl mb-6">Order Summary</h2>
          
          <div className="space-y-3 mb-6">
            {cartItems.map((item, index) => (
              <div key={item._id?.toString() || `item-${index}`} className="flex justify-between items-center py-2">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-base-300 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold">x{item.quantity}</span>
                  </div>
                  <span className="text-sm">{item.title}</span>
                </div>
                <span className="font-bold">
                  {(item.price * item.quantity).toLocaleString()}
                </span>
              </div>
            ))}
          </div>

          <div className="divider" />
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span>Subtotal ({totalItems} items)</span>
              <span>{totalAmount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm opacity-75">
              <span>Shipping</span>
              <span>50</span>
            </div>
          </div>

          <div className="divider" />

          <div className="flex justify-between items-center text-2xl font-bold mb-6 p-4 bg-base-100 rounded-lg">
            <span>Total</span>
            <span>{(totalAmount + 50).toLocaleString()}</span>
          </div>

          <div className="mb-6">
            <a href="/cart" className="btn btn-outline btn-block btn-sm">
              ← Continue Shopping
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

function PayButton({ isPending }) {
  const { pending } = useFormStatus();
  
  return (
    <button 
      type="submit" 
      disabled={pending || isPending}
      className="btn btn-primary btn-block btn-lg text-xl h-14"
    >
      {pending || isPending ? (
        <>
          <span className="loading loading-spinner"></span>
          Processing Order...
        </>
      ) : (
        'Complete Order'
      )}
    </button>
  );
}

export default CheckoutPage;
