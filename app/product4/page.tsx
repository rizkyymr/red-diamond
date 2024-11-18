"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const ProductsPage = () => {
  const handleBuy = () => {
    window.location.href =
      "https://www.tokopedia.com/rdlabs/board-controller-power-supply-hydraulic?extParam=ivf%3Dfalse?extParam=whid%3D410203";
  };

  const handleViewAll = () => {
    window.location.href = "/viewall";
  };

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
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex flex-col min-h-screen w-full mt-20 md:mt-24 lg:mt-24 justify-center ${
        isVisible ? "fade-in" : "opacity-0"
      }`}
    >
      {/* Section Utama */}
      <div className="flex flex-col md:flex-row border p-4 bg-white w-full justify-center items-center md:items-start">
        <img
          src="/product4.png"
          alt="Deskripsi Gambar"
          className="w-full md:w-1/3 lg:w-1/4 h-auto object-cover rounded-lg mb-4 md:mb-0"
        />
        <div className="flex flex-col justify-between p-4 w-full md:w-2/3">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-black text-center md:text-left">
              Board Controller Power Supply Hydraulic
            </h2>
            <h3 className="font-bold mt-4 text-black">Specification :</h3>
            <ul className="list-disc list-inside text-sm text-black">
              <li>Input, battery charger 12-14.6 volt</li>
              <li>Battery, 2 unit LiFePO4</li>
              <li>Output, 12 volt DC max 22 Ampere</li>
              <li>Programmable</li>
              <li>Dimension, 100 mm x 80 mm x 3 mm</li>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row justify-between mt-4 gap-4">
            <button
              onClick={handleViewAll}
              className="w-full md:w-auto bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
            >
              All Products
            </button>
            <button
              onClick={handleBuy}
              className="w-full md:w-auto bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Buy
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-left uppercase">
          Other Products —
        </h2>
        <div className="flex overflow-x-auto gap-4 mt-4 pb-4">
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

      <Footer />
    </div>
  );
};

export default ProductsPage;
