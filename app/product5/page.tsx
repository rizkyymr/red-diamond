"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const ProductsPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleBuy = () => {
    window.location.href =
      "https://www.tokopedia.com/rdlabs/stm32-nucleo-g474re-development-board-microcontroller?extParam=src%3Dshop%26whid%3D410203";
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
    {
      title: "Board Controller Power Supply Hydraulic",
      image: "/product4.png",
      link: "/product4",
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
      className={`flex flex-col min-h-screen w-full mt-20 md:mt-24 lg:mt-24 justify-center  ${
        isVisible ? "fade-in" : "opacity-0"
      }`}
    >
      <div className="flex flex-col md:flex-row border p-4 md:p-6 bg-white w-full justify-center items-center md:items-start">
        <Image
          src="/product5.png"
          alt="Deskripsi Gambar"
          width={500}
          height={500}
          className="w-full md:w-1/3 h-auto object-cover rounded-lg"
        />
        <div className="flex flex-col justify-between p-4 md:pl-6 w-full md:w-2/3">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-black text-center md:text-left">
              STM32 Nucleo G474RE Development Board Microcontroller
            </h2>
            <h3 className="font-bold mt-4 text-black">a. Description:</h3>
            <p className="text-sm text-black">
              The STM32G4 Nucleo-64 boards based on the MB1367 reference board
              (NUCLEO-G431RB, NUCLEO-G474RE, NUCLEO-G491RE) provide an
              affordable and flexible way for users to try out new concepts and
              build prototypes with the STM32G4 Series microcontrollers,
              choosing from the various combinations of performance, power
              consumption, and features.
            </p>
            <p className="text-sm text-black mt-2">
              The ARDUINO® Uno V3 connectivity and the ST morpho headers provide
              an easy means of expanding the functionality of the Nucleo open
              development platform with a wide choice of specialized shields.
              The STM32G4 Nucleo-64 boards do not require any separate probe as
              they integrate the STLINK-V3E debugger/programmer.
            </p>
            <p className="text-sm text-black mt-2">
              The STM32G4 Nucleo-64 boards come with comprehensive free software
              libraries and examples available with the STM32CubeG4 MCU Package.
              The Arduino™ Uno V3 connectivity support and the ST morpho headers
              allow the easy expansion of the functionality of the STM32 Nucleo
              open development platform with a wide choice of specialized
              shields. The STM32 Nucleo-64 board does not require any separate
              probe as it integrates the ST-LINK debugger/programmer.
            </p>

            <h3 className="font-bold mt-4 text-black">b. Key Features:</h3>
            <ul className="list-disc list-inside text-sm text-black">
              {isExpanded ? (
                <>
                  <li>STM32 microcontroller in LQFP64 or LQFP48 package</li>
                  <li>1 user LED shared with ARDUINO®</li>
                  <li>1 user and 1 reset push-buttons</li>
                  <li>32.768 kHz crystal oscillator</li>
                  <li>Board connectors:</li>
                  <ul className="list-disc list-inside">
                    <li>ARDUINO® Uno V3 expansion connector</li>
                    <li>
                      ST morpho extension pin headers for full access to all
                      STM32 I/Os
                    </li>
                  </ul>
                  <li>
                    Flexible power-supply options: ST-LINK USB VBUS or external
                    sources
                  </li>
                  <li>
                    On-board ST-LINK debugger/programmer with USB re-enumeration
                    capability: mass storage, Virtual COM port, and debug port
                  </li>
                  <li>
                    Comprehensive free software libraries and examples available
                  </li>
                  <li>
                    Support of a wide choice of Integrated Development
                    Environments (IDEs) including IAR Embedded Workbench®,
                    MDK-ARM, and STM32CubeIDE
                  </li>
                  <li>Board-specific features:</li>
                  <ul className="list-disc list-inside">
                    <li>External SMPS to generate Vcore logic supply</li>
                  </ul>
                </>
              ) : (
                <>
                  <li>STM32 microcontroller in LQFP64 or LQFP48 package</li>
                  <li>1 user LED shared with ARDUINO®</li>
                  <li>1 user and 1 reset push-buttons</li>
                  <li>32.768 kHz crystal oscillator</li>
                  <li>Board connectors:</li>
                  <ul className="list-disc list-inside">
                    <li>ARDUINO® Uno V3 expansion connector</li>
                    <li>
                      ST morpho extension pin headers for full access to all
                      STM32 I/Os
                    </li>
                  </ul>
                </>
              )}
            </ul>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-600 mt-2"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
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
