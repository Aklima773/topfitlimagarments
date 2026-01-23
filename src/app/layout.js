import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const poppin = Poppins({
  weight:["100", "200", "400","500","600","700","800"],
})


export const metadata = {
  title: {
    default:"Topfit Lima Garments",
    template: "%s | Topfit Lima Garments"
  },
  description: "Your Look is our concern",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="limetheme">
      <body
        className={`${poppin.className} antialiased bg-secondary`}
      >

        <header className="py-2 md:w-11/12 mx-auto">
          <Navbar></Navbar>
        </header>

        <main className="py-2 w-full mx-auto min-h-[calc(100vh-302px)]">
        {children}</main>
      

        <footer className="">
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
