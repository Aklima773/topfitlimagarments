import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <div>
            <Link href={"/"}>
            
            {/* <Image alt="topfitLimaGarments" src="/assets/logo.png" width={80} height={80}/>
             */}

             <div className='flex flex-col justify-center items-center'>
             <h1 className='font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#bced5a] to-[#07cc00] [-webkit-text-stroke:1px_#000]'>TopFit</h1>
             <p className='font-extrabold text-neutral'>Lima Garments</p>
             </div>

            
            </Link>
            
        </div>
    );
};

export default Logo;