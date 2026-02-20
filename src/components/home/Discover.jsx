import Link from 'next/link';
import React from 'react';

const Discover = () => {
    return (
        <div>
            <div className="discover-content w-11/12 flex flex-col justify-center items-center space-x-6">
                <div className="upper-part flex justify-center items-center w-full">
                    <div className="relative card bg-base-100  md:w-[900px] shadow-sm p-6 bg-cover bg-center opacity-90 rounded-lg" 
                         style={{ backgroundImage: 'url(https://i.ibb.co/1fh2tVdQ/banner1.png)' }}>
                        
                        {/* Dark overlay - perfect for white text */}
                        {/* <div className="absolute inset-0 bg-black/80 z-10 rounded-lg"></div> */}
                        
                        {/* Content with proper z-index and spacing */}
                        <div className="card-body flex flex-col justify-start items-start space-y-2 relative z-20 pt-8 pb-12 ml-6">
                            <p className='text-xm md:text-lg font-semibold text-primary/90 drop-shadow-md'>
                                Discover the best t-shirt for every style and need.
                            </p>
                            <h2 className="card-title text-white text-4xl md:text-5xl font-bold drop-shadow-lg leading-tight">
                                Premium T-Shirts
                            </h2>
                            <p className='text-white/95 text-lg max-w-lg drop-shadow-md leading-relaxed'>
                                A card component has a figure, a body part, and inside body there are title and actions parts
                            </p>
                        </div>
                    </div>
                </div>

                <div className="lower-part flex flex-col md:flex-row justify-center items-center gap-4 mt-6 mx-auto">
                    <div className="left-side w-full md:w-1/2 ">
                          <div className="relative card bg-base-100 md:w-[600px] shadow-sm  bg-cover bg-center opacity-90  rounded-lg" 
                         style={{ backgroundImage: 'url(https://i.ibb.co/1fh2tVdQ/banner1.png)' }}>
                        
                        {/* Dark overlay - perfect for white text */}
                        {/* <div className="absolute inset-0 bg-black/80 z-10 rounded-lg"></div> */}
                        
                        {/* Content with proper z-index and spacing */}
                        <div className="card-body flex flex-col justify-end items-end space-y-2 relative z-20  pb-12 ml-6">
                          
                            <h2 className="card-title text-white text-3xl md:text-4xl font-bold drop-shadow-lg leading-tight mt-6">
                               Comfortable Collections
                            </h2>
                              <p className='text-sm font-semibold text-primary/90 drop-shadow-md'>
                                Discover the best t-shirt for every style and need.
                            </p>

                            <Link href={'/products'} className='btn btn-primary'>View Collection</Link>
                            
                        </div>
                    </div>
                    </div>
                    <div className="right-side w-full md:w-1/2">
                            <div className="relative card bg-base-100 md:w-[600px] shadow-sm  bg-cover bg-center opacity-90  rounded-lg" 
                         style={{ backgroundImage: 'url(https://i.ibb.co/1fh2tVdQ/banner1.png)' }}>
                        
                        {/* Dark overlay - perfect for white text */}
                        {/* <div className="absolute inset-0 bg-black/80 z-10 rounded-lg"></div> */}
                        
                        {/* Content with proper z-index and spacing */}
                        <div className="card-body flex flex-col justify-end items-end space-y-2 relative z-20  pb-12 ml-6">
                          
                            <h2 className="card-title text-white text-3xl md:text-4xl font-bold drop-shadow-lg leading-tight mt-6">
                                Fashionable T-shirt
                            </h2>
                              <p className='text-sm font-semibold text-primary/90 drop-shadow-md'>
                                Discover the best t-shirt for every style and need.
                            </p>

                            <Link href={'/products'} className='btn btn-primary'>View Collection</Link>
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;
