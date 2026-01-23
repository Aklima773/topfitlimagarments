import Banner from "@/components/home/Banner";
import Products from "@/components/home/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-80">

      <section className="banner">
      <Banner></Banner>
      </section>

      <section className="products">

        <Products></Products>

      </section>

     
     
    </div>
  );
}
