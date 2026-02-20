import CounterButton from '../counterButton/CounterButton';
import Link from 'next/link';
import { FaArrowCircleRight, FaCartPlus } from 'react-icons/fa';
 import Image from 'next/image';


  const Banner = () => { 


    return (
         <> 
         <div className='flex flex-col md:flex-row justify-stretch items-center gap-2 '>
       <div className="left-side w-full md:w-1/2 flex-1 flex justify-center items-center">
       <div className="max-w-xl flex flex-col items-start text-left ">
             
             <p className='text-sm text-info font-semibold tracking-wide mb-6'>FASHIONABLE T-SHIRTS, MADE WITH QUALITY</p> 
             <h1 className='text-3xl md:text-5xl text-accent font-bold italic tracking-wide mb-6'>MAXIMUM COMFORT, <br/> PREMIUM QUALITY.</h1> 
             <p className='text-sm text-info font-normal tracking-wider mb-6'>Fashionable t-shirts designed for comfort,durability,<br/> and everyday wear</p> 
             
             
             {/* counting button */} 
             <div className="counting-button flex items-center justify-start gap-6 mb-6"> 
               <CounterButton end={12000} label="T-SHIRTS SOLD" /> <CounterButton end={100} label="SATISFACTION %" /> 
             <CounterButton end={8500} label="HAPPY CUSTOMERS" /> 
             
             </div>
             
              {/* button */}
              
               <div className="button flex flex-col md:flex-row justify-start md:items-center gap-4 mb-8">
                    <Link href={"/products"}>
                    <button className='btn btn-primary text-xl cursor-pointer'>Order Now <FaCartPlus className="" size={20} />
                    </button>
                    </Link> 
                    
                    <Link href={"/products"}>
                    <button className='btn btn-primary text-xl cursor-pointer'>Explore Products<FaArrowCircleRight className="" size={20} />
                    </button></Link> 
                    </div> 
                    </div> 
       </div>
                     
                     <div className="right-side w-full md:w-1/2 bg-primary md:rounded-bl-badge relative flex-1 md:-mr-[calc((100vw-100%)/2)]">
                     
                      <div className=" hidden md:inline-flex flex-col client-happy bg-white w-[250px] rounded-md p-4 absolute top-[80px] -left-[40px] shadow-lg animate-float ">
                         <h2 className="text-[16px] text-accent font-bold mb-2">10,000+ CLIENT HAPPY</h2>
                         
                          <p className='text-sm text-info'>T-shirts for every adventure,<br/> every style, every day.</p>
                           </div> <div className='animate-float'>
                             <Image alt="banner" src="/assets/banner_t-shirt.png" width={500} height={400} className='md:ml-20'/> 
                             </div>
                              </div> 
                              </div>
                               </>
                                ); 
                            };
 export default Banner;