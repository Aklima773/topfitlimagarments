import Banner from "@/components/home/Banner";
import Discover from "@/components/home/Discover";
import FindyourPerfect from "@/components/home/FindyourPerfect";
import Products from "@/components/home/Products";
import Image from "next/image";


export default function Home() {
  return (
    <div className="space-y-24">

      <section className="banner">
      <Banner></Banner>
      </section>

      <section className="find your">
        <FindyourPerfect></FindyourPerfect>
      </section>

         <section className="discover">
        <Discover></Discover>
      </section>

      <section className="products">

        <Products></Products>

      </section>

   

     
     
    </div>
  );
}
