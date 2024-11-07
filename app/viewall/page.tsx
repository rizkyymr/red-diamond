import React from 'react';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const ProductsPage = () => {
  const products = [
    {
      title: "Complete Development Kit Robot IoT",
      image: "/product1.png",
      link: "/product1"
    },
    {
      title: "STM32U5 Development Board Microcontroller",
      image: "/product2.jpg",
      link: "/product2"
    },
    {
      title: "LoRa BlackPill Development Board",
      image: "/product3.jpg",
      link: "/product3"
    },
  ];

  return (
    <div className='bg-white w-full h-screen mt-24 relative'>
      <div className='absolute top-4 left-4 z-10 mt-2'>
        <Link href="/" className="bg-black/50 text-white rounded-full p-2 hover:bg-gray-700 transition">
          Back to Home
        </Link>
      </div>
      <div className='text-center'>
        <div className="inline-block">
          <h1 className="text-4xl font-bold text-black uppercase tracking-wider mt-10 font-customFont">
            Products
          </h1>
          <div className="h-1 bg-black mt-4"></div>
        </div>
        <p className="text-black/80 max-w-2xl mx-auto mt-6 px-4 font-serif">
          Here are some of the products we offer you.
        </p>
      </div>
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-start">
          <div className="flex overflow-x-auto gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-2xl w-80 bg-white shadow-lg p-4 border-4 border-black"
              >
                <div className="relative h-[300px] w-full">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-2xl"
                  />
                </div>
                <div className="flex flex-col items-center mt-4">
                  <h3 className="text-black text-2xl font-bold tracking-wider">
                    {product.title}
                  </h3>
                  <div className="mt-10 flex-grow"></div>
                  <div className="absolute bottom-4 right-4">
                    <Link href={product.link} className="text-black hover:underline">
                      Read More <span>&#8594;</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductsPage;