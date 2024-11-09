'use client';
import React, { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const ProductsPage = () => {
  const handleBuy = () => {
    window.location.href = 'https://www.tokopedia.com/rdlabs/lora-blackpill-development-board-only-board-3dff5?extParam=src%3Dshop%26whid%3D410203';
  };

  const handleViewAll = () => {
    window.location.href = '/viewall';
  };

  const products = [
    {
      title: "Complete Development Kit Robot IoT",
      image: "/product1.png",
      link: "/product1",
    },
    {
      title: "LoRa BlackPill Development Board",
      image: "/product2.jpg",
      link: "/product2",
    },
    {
      title: "LoRa BlackPill Development Board",
      image: "/product3.jpg",
      link: "/product3",
    },
  ]

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`flex flex-col min-h-screen w-full mt-28 justify-center ${isVisible ? 'fade-in' : 'opacity-0'}`}>
      <div className="flex border p-4 bg-white w-full justify-center">
        <img src="/product4.png" alt="Deskripsi Gambar" className="w-1/4 h-auto object-cover rounded-lg" />
        <div className="flex flex-col justify-between p-4 w-1/2">
          <div>
            <h2 className="text-4xl font-bold text-black text-center">LoRa BlackPill Development Board</h2>
            <h3 className="font-bold mt-4 text-black">Description :</h3>
            <ul className="list-disc list-inside text-sm text-black">
              <li>Product Type <span>&#8594;</span> Module</li>
              <li>Part.No <span>&#8594;</span> LBAA0QB1SJ</li>
              <li>LoRaWAN™ Channel Band <span>&#8594;</span> 860-930MHz</li>
              <li>Chipset <span>&#8594;</span> Semtech (SX1262) + STM (STM32L)</li>
              <li>Modulation <span>&#8594;</span> FSK and LoRa™ Modulation</li>
              <li>Antenna <span>&#8594;</span> External</li>
              <li>Operating Temperature Range <span>&#8594;</span> -40 to +85</li>
              <li>Dimension <span>&#8594;</span> 10.0 mm x 8.0 mm x 1.6 mm</li>
              <li>Interface Voltage (Vdc for VIO) <span>&#8594;</span> 3.3 Vdc</li>
              <li>Supply Voltage min <span>&#8594;</span> 2.2V for VDD_MCU, VDD_RF, VDD_TCXO</li>
              <li>Supply Voltage max <span>&#8594;</span> 3.6V for VDD_MCU, VDD_RF, VDD_TCXO</li>
              <li>Transmit Mode Current <span>&#8594;</span> 118mA @ 22dBm setting</li>
              <li>Transmit Power <span>&#8594;</span> Up to +21.5dBm</li>
              <li>Receive Mode Current <span>&#8594;</span> 15.5mA @ 125kHz BW</li>
              <li>Receiver Sensitivity <span>&#8594;</span> -135.5dBm @ 1% PER, 125kHz BW, SF=12</li>
              <li>Host Interface <span>&#8594;</span> I2C/ UART/ USB/ SPI</li>
              <li>RoHS Compliant <span>&#8594;</span> Yes</li>
              <li>Technology <span>&#8594;</span> LPWA</li>
              <li>FCC/IC Certified <span>&#8594;</span> FCC/IC Reference Certified</li>
            </ul>
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={handleViewAll}
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
            >
              All Products
            </button>
            <button
              onClick={handleBuy}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Buy
            </button>
          </div>
        </div>
      </div>

      <div className='mt-4 ml-4'>
        <h2 className="text-4xl font-bold text-left uppercase">Other Products —</h2>
        <div className="flex justify-between items-start mt-4 mb-10">
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
      </div>

      <Footer />
    </div>
  );
};

export default ProductsPage; 