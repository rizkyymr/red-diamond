"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const ProductsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const products = [
    {
      title: "Complete Development Kit Robot IoT",
      image: "/product1.png",
      link: "/product1",
    },
    {
      title: "STM32U5 Development Board Microcontroller",
      image: "/product2.jpg",
      link: "/product2",
    },
    {
      title: "LoRa BlackPill Development Board",
      image: "/product3.jpg",
      link: "/product3",
    },
    {
      title: "Board Controller Power Supply Hydraulic",
      image: "/product4.png",
      link: "/product4",
    },
  ];

  return (
    <div
      className={`bg-white w-full h-auto mt-24 relative ${
        isVisible ? "fade-in" : "opacity-0"
      }`}
    >
      <div className="absolute top-4 left-4 z-10 mt-2">
        <Link
          href="/"
          className="bg-black/50 text-white rounded-full p-2 hover:bg-gray-700 transition"
        >
          Back to Home
        </Link>
      </div>
      <div className="text-center">
        <div className="inline-block">
          <h1 className="text-2xl md:text-4xl font-bold text-black uppercase tracking-wider mt-10 font-customFont">
            Products
          </h1>
          <div className="h-1 bg-black mt-4"></div>
        </div>
        <p className="text-black/80 max-w-2xl mx-auto mt-6 px-4 font-serif">
          Here are some of the products we offer you.
        </p>
      </div>

      <section className="container mx-auto px-4 py-16">
        <div className="mt-4">
          <div className="overflow-x-auto flex gap-4 mt-4 pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            {products.map((product, index) => (
              <Link
                key={index}
                href={product.link}
                className="relative group cursor-pointer overflow-hidden rounded-2xl w-72 md:w-80 bg-white shadow-lg p-4 border-2 border-gray-300 flex-shrink-0"
              >
                <div className="relative h-[200px] md:h-[300px] w-full">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-2xl"
                  />
                </div>
                <div className="flex flex-col items-center mt-4">
                  <h3 className="text-black text-xl md:text-2xl font-bold tracking-wider">
                    {product.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
