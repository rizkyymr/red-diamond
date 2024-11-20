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

  // Produk dengan kategori
  const products = [
    {
      title: "Complete Development Kit Robot IoT",
      image: "/product1.png",
      link: "/product1",
      category: "Development Board",
    },
    {
      title: "STM32U5 Development Board Microcontroller",
      image: "/product2.jpg",
      link: "/product2",
      category: "Development Board",
    },
    {
      title: "STM32 Arduino Green Pill Development Board STM32G431CBT6",
      image: "/product9.jpg",
      link: "/product9",
      category: "Development Board",
    },
    {
      title: "Development board LoRa 920-923 MHz muRata 1SJ + STLink-v3",
      image: "/product10.png",
      link: "/product10",
      category: "Development Board",
    },
    {
      title: "STM32U5 Development Board Microcontroller",
      image: "/product2.jpg",
      link: "/product2",
      category: "STMicroelectronics STM32",
    },
    {
      title: "STM32 Nucleo G474RE Development Board Microcontroller",
      image: "/product5.png",
      link: "/product5",
      category: "STMicroelectronics STM32",
    },
    {
      title: "STM32 Nucleo-64 G0B1RE Development Board MCU",
      image: "/product6.png",
      link: "/product6",
      category: "STMicroelectronics STM32",
    },
    {
      title: "STM32 NUCLEO G491RE STM32G491RE ARM Cortex M4 AT 170MHz",
      image: "/product7.png",
      link: "/product7",
      category: "STMicroelectronics STM32",
    },
    {
      title: "STMicroelectronics Nucleo-144 U575ZI-Q Development Board MCU",
      image: "/product8.png",
      link: "/product8",
      category: "STMicroelectronics STM32",
    },
    {
      title: "LoRa BlackPill Development Board",
      image: "/product3.jpg",
      link: "/product3",
      category: "LoRa Dev Board",
    },
    {
      title: "Development board LoRa 920-923 MHz muRata 1SJ + STLink-v3",
      image: "/product10.png",
      link: "/product10",
      category: "LoRa Dev Board",
    },
    {
      title: "Turtle Board Heltec Automation STM32L43KC LoRaWAN Wireless Module",
      image: "/product12.png",
      link: "/product12",
      category: "LoRa Dev Board",
    },
    {
      title: "Board Controller Power Supply Hydraulic",
      image: "/product4.png",
      link: "/product4",
      category: "Power Supply",
    },
    {
      title: "Power Supply 300 Watt Module Board 24 Volt 9A",
      image: "/product11.png",
      link: "/product11",
      category: "Power Supply",
    },
  ];

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div
      className={`bg-white w-full h-auto mt-24 relative ${
        isVisible ? "fade-in" : "opacity-0"
      }`}
    >
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
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12" id={category.toLowerCase().replace(/ /g, '-')}>
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              {category} —
            </h2>

            
            <div className="overflow-x-auto flex gap-4 mt-4 pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
              {products
                .filter((product) => product.category === category)
                .map((product, index) => (
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
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
