import Banner from "@/components/home/Banner";
import Discover from "@/components/home/Discover";
import FindyourPerfect from "@/components/home/FindyourPerfect";
import Products from "@/components/home/Products";
import Test from "@/components/Test";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";


export default async function Home() {

  const session = await getServerSession(authOptions);
  return (
    <div className="space-y-24">
      {/* <Test></Test> */}
  {/* <p>{JSON.stringify(session)}</p> */}
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
