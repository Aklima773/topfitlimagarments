import React from 'react';
import TypingHeading from '../typingHeading/TypingHeading';
import Link from 'next/link';
import { FaArrowCircleRight } from 'react-icons/fa';
import Image from 'next/image';
import CartButtons from '../buttons/CartButtons';
import { getProducts } from '@/actions/server/product';


const FindyourPerfect = async () => {
     
    return (
        <div className='w-11/12 mx-auto space-y-6 flex flex-col md:flex-row justify-between items-center gap-5'>
            <div className="left-side flex flex-col justify-start  space-y-6">

                <div className="heading">
                    <TypingHeading textAlign="text-left">Upgrade Your Style Today!</TypingHeading>
                </div>

                <p className='text-sm text-info font-normal tracking-wider'>Discover premium clothing designed for comfort, confidence, and the perfect<br/> fit—every single day.</p>

                <div>
                   <Link href={"/allproducts"}>
                    <button className='btn btn-primary text-xl cursor-pointer'>Explore Products<FaArrowCircleRight className="" size={20} />
                    </button></Link> 
                </div>

                 
            </div>

            <div className="right-side">
                <div className="card flex flex-col md:flex-row justify-center items-center gap-6">
                    <div className="card-1 bg-base-100 w-96 shadow-sm">
<figure>
    <Image
      src="/assets/imag1.jpg"
      alt="topfit"
      width={300}
      height={200} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Everyday Wear</h2>
    <p>Essential styles for daily comfort</p>
    <div className="card-actions justify-start">
      <Link href={"/allproducts"}>
                    <button className='btn btn-primary text-xl cursor-pointer'>Explore More<FaArrowCircleRight className="" size={20} />
                    </button></Link> 
    </div>
  </div>
</div>

                    <div className="card-2 bg-base-100 w-96 shadow-sm">
<figure>
    <Image
      src="/assets/imag2.jpg"
      alt="topfit"
      width={130}
      height={200} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Deep Style Collection</h2>
    <p>Elevated looks with bold details</p>
    <div className="card-actions justify-start">
      <Link href={"/allproducts"}>
                    <button className='btn btn-primary text-xl cursor-pointer'>Explore More<FaArrowCircleRight className="" size={20} />
                    </button></Link> 
    </div>
  </div>
</div>

                   <div className="card-3 bg-base-100 w-96 shadow-sm">
<figure>
    <Image
      src="/assets/image3.jpg"
      alt="topfit"
      width={130}
      height={200} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Premium Collection</h2>
    <p>Crafted for standout moments</p>
    <div className="card-actions justify-start">
      <Link href={"/allproducts"}>
                    <button className='btn btn-primary text-xl cursor-pointer'>Explore More<FaArrowCircleRight className="" size={20} />
                    </button></Link> 
    </div>
  </div>
</div>
                </div>
            </div>
        </div>
    );
};

export default FindyourPerfect;