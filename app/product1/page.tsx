'use client';
import React from 'react';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const ProductsPage = () => {
  const handleBuy = () => {
    window.location.href = 'https://www.tokopedia.com/rdlabs/complete-development-kit-robot-iot-device-rp2040-oled-buzzer-board-buzzer-d086a?extParam=src%3Dshop%26whid%3D410203';
  };

  const handleViewAll = () => {
    window.location.href = '/viewall'
  };

  const products = [
    {
      title: "Complete Development Kit Robot IoT",
      image: "/product2.jpg",
      link: "/product2",
    },
    {
      title: "LoRa BlackPill Development Board",
      image: "/product3.jpg",
      link: "/product3",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen w-full mt-28 justify-center">
      <div className="flex border p-4 bg-white w-full justify-center">
        <img src="/product1.png" alt="Deskripsi Gambar" className="w-1/4 h-auto object-cover rounded-lg" />
        <div className="flex flex-col justify-between p-4 w-1/2">
          <div>
            <h2 className="text-4xl font-bold text-black text-center">Complete Development Kit Robot IoT</h2>
            <p className="text-md text-black text-center">
              Complete Development Kit Robot IoT Device RP2040 OLED Buzzer.
            </p>
            <h3 className="font-bold mt-4 text-black text-lg">Spesifikasi:</h3>
            <ul className="list-disc list-inside text-sm text-black mt-2">
              <li>Power 5V USB Type-C</li>
              <li>Switch Power</li>
              <li>10 Grove output untuk digunakan sebagai koneksi sensor yang akan digunakan</li>
              <li>Motor Driver menggunakan Chip MX1508</li>
              <li>Pin IO sudah tertulis di setiap Grove</li>
              <li>LED internal yang sudah terpasang, Buzzer dan Motor Servo</li>
              <li>2 User buttons</li>
              <li>WiFi Module ESP8266</li>
              <li>Grove 8 Direkomendasikan untuk Modul Bluetooth HC05</li>
              <li>Untuk Display Direkomendasikan menggunakan SH1106</li>
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