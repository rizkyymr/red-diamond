"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const ProductsPage = () => {
  const handleBuy = () => {
    window.location.href =
      "https://www.tokopedia.com/rdlabs/lora-blackpill-development-board-only-board-3dff5?extParam=src%3Dshop%26whid%3D410203";
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
      title: "Board Controller Power Supply Hydraulic",
      image: "/product4.png",
      link: "/product4",
    },
    {
      title: "STM32 Nucleo G474RE Development Board Microcontroller",
      image: "/product5.png",
      link: "/product5",
    },
    {
      title: "STM32 Nucleo-64 G0B1RE Development Board MCU",
      image: "/product6.png",
      link: "/product6",
    },
    {
      title: "STM32 NUCLEO G491RE STM32G491RE ARM Cortex M4 AT 170MHz",
      image: "/product7.png",
      link: "/product7",
    },
    {
      title: "STMicroelectronics Nucleo-144 U575ZI-Q Development Board MCU",
      image: "/product8.png",
      link: "/product8",
    },
    {
      title: "STM32 Arduino Green Pill Development Board STM32G431CBT6",
      image: "/product9.jpg",
      link: "/product9",
    },
    {
      title: "Development board LoRa 920-923 MHz muRata 1SJ + STLink-v3",
      image: "/product10.png",
      link: "/product10",
    },
    {
      title: "Power Supply 300 Watt Module Board 24 Volt 9A",
      image: "/product11.png",
      link: "/product11",
    },
    {
      title:
        "Turtle Board Heltec Automation STM32L43KC LoRaWAN Wireless Module",
      image: "/product12.png",
      link: "/product12",
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
      <div className="flex flex-col md:flex-row border p-4 bg-white w-full justify-center items-center md:items-start">
        <Image
          src="/product3.jpg"
          alt="Deskripsi Gambar"
          width={500}
          height={500}
          className="w-full md:w-1/3 h-auto object-cover rounded-lg"
        />
        <div className="flex flex-col justify-between p-4 md:pl-6 w-full md:w-2/3">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-black text-center md:text-left">
              LoRa BlackPill Development Board
            </h2>
            <h3 className="font-bold mt-4 text-black">Description :</h3>
            <ul className="list-disc list-inside text-sm text-black">
              <li>
                Product Type <span>&#8594;</span> Module
              </li>
              <li>
                Part.No <span>&#8594;</span> LBAA0QB1SJ
              </li>
              <li>
                LoRaWAN™ Channel Band <span>&#8594;</span> 860-930MHz
              </li>
              <li>
                Chipset <span>&#8594;</span> Semtech (SX1262) + STM (STM32L)
              </li>
              <li>
                Modulation <span>&#8594;</span> FSK and LoRa™ Modulation
              </li>
              <li>
                Antenna <span>&#8594;</span> External
              </li>
              <li>
                Operating Temperature Range <span>&#8594;</span> -40 to +85
              </li>
              <li>
                Dimension <span>&#8594;</span> 10.0 mm x 8.0 mm x 1.6 mm
              </li>
              <li>
                Interface Voltage (Vdc for VIO) <span>&#8594;</span> 3.3 Vdc
              </li>
              <li>
                Supply Voltage min <span>&#8594;</span> 2.2V for VDD_MCU,
                VDD_RF, VDD_TCXO
              </li>
              <li>
                Supply Voltage max <span>&#8594;</span> 3.6V for VDD_MCU,
                VDD_RF, VDD_TCXO
              </li>
              <li>
                Transmit Mode Current <span>&#8594;</span> 118mA @ 22dBm setting
              </li>
              <li>
                Transmit Power <span>&#8594;</span> Up to +21.5dBm
              </li>
              <li>
                Receive Mode Current <span>&#8594;</span> 15.5mA @ 125kHz BW
              </li>
              <li>
                Receiver Sensitivity <span>&#8594;</span> -135.5dBm @ 1% PER,
                125kHz BW, SF=12
              </li>
              <li>
                Host Interface <span>&#8594;</span> I2C/ UART/ USB/ SPI
              </li>
              <li>
                RoHS Compliant <span>&#8594;</span> Yes
              </li>
              <li>
                Technology <span>&#8594;</span> LPWA
              </li>
              <li>
                FCC/IC Certified <span>&#8594;</span> FCC/IC Reference Certified
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row justify-between mt-4 gap-4">
            <button
              onClick={handleViewAll}
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-full sm:w-auto"
            >
              All Products
            </button>
            <button
              onClick={handleBuy}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full sm:w-auto"
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
