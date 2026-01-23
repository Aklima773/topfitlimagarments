import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const poppin = Poppins({
  weight:["100", "200", "400","500","600","700","800"],
})


export const metadata = {
  title: 'TopFit Lima Garments – Premium Garment Solutions',
  description:
    'TopFit Lima Garments offers premium quality garments tailored for comfort and style. Explore our collection and elevate your wardrobe.',
  keywords: ['Garments', 'Clothing', 'Fashion', 'TopFit Lima', 'Premium Garments', 'Stylish Apparel'],
  authors: [{ name: 'TopFit Lima Garments' }],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
  themeColor: '#ff6600',

  openGraph: {
    title: 'TopFit Lima Garments – Premium Garment Solutions',
    description:
      'TopFit Lima Garments offers premium quality garments tailored for comfort and style. Explore our collection and elevate your wardrobe.',
    url: 'https://topfitlimagarments.vercel.app/',
    siteName: 'TopFit Lima Garments',
    images: [
      {
        url: 'https://i.ibb.co/4RC6k63Y/Screenshot-2026-01-24-022204.png',
        width: 1200,
        height: 630,
        alt: 'TopFit Lima Garments Homepage Screenshot',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    site: '@TopFitLima',
    creator: '@TopFitLima',
    title: 'TopFit Lima Garments – Premium Garment Solutions',
    description:
      'TopFit Lima Garments offers premium quality garments tailored for comfort and style. Explore our collection and elevate your wardrobe.',
    images: [
      {
        url: 'https://i.ibb.co/XZxvSJ7M/Screenshot-2026-01-24-022318.png',
        alt: 'TopFit Lima Garments Twitter Preview',
      },
    ],
  },
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
