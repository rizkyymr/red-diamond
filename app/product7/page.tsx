"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const ProductsPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleBuy = () => {
    window.location.href =
      "https://www.tokopedia.com/rdlabs/stm32-nucleo-g491re-stm32g491re-arm-cortex-m4-at-170mhz?extParam=src%3Dshop%26whid%3D410203";
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
          src="/product7.png"
          alt="Deskripsi Gambar"
          width={500}
          height={500}
          className="w-full md:w-1/3 h-auto object-cover rounded-lg"
        />
        <div className="flex flex-col justify-between p-4 md:pl-6 w-full md:w-2/3">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-black text-center md:text-left">
              STM32 NUCLEO G491RE STM32G491RE ARM Cortex M4 AT 170MHz
            </h2>
            <h3 className="font-bold mt-4 text-black">a. Description:</h3>
            <p className="text-sm text-black">
              The STM32 NUCLEO-G491RE module features a 32-bit STM32G491RE
              microcontroller, equipped with an Arm Cortex-M4 core clocked up to
              170 MHz, 512 kB of Flash memory, and 96 kB of SRAM. As a part of
              the Nucleo-64 family, it is compatible with the mbed platform and
              includes connectors for Arduino Uno overlays and ST morpho pins,
              granting access to all microcontroller GPIO pins.
            </p>
            <p className="text-sm text-black">
              This module is supported by a wide range of Integrated Development
              Environments (IDEs) such as IAR Embedded Workbench, MDK-ARM, and
              STM32CubeIDE. It is equipped with the ST-LINK debugger/programmer
              for easy programming and debugging.
            </p>
            <h3 className="font-bold mt-4 text-black">b. Specifications:</h3>
            <ul className="list-disc list-inside text-sm text-black">
              {isExpanded ? (
                <>
                  <li>Microcontroller: STM32G491RE</li>
                  <li>Core: Arm Cortex-M4 32-bit</li>
                  <li>Clock Frequency: 170 MHz</li>
                  <li>Flash Memory: 512 kB</li>
                  <li>SRAM: 96 kB</li>
                  <li>DMA: 16 channels</li>
                  <li>Interfaces:</li>
                  <ul className="list-disc list-inside">
                    <li>3 x SPI</li>
                    <li>3 x I2C</li>
                    <li>5 x UART</li>
                    <li>2 x FDCAN</li>
                    <li>1 x LPUART</li>
                    <li>1 x SAI</li>
                    <li>1 x USB 2.0</li>
                    <li>1 x IRTIM</li>
                    <li>1 x USB-C</li>
                  </ul>
                  <li>3 x ADCs: 16-bit</li>
                  <li>4 x DACs: 12-bit</li>
                  <li>Two types of connectors:</li>
                  <ul className="list-disc list-inside">
                    <li>Connectors for Arduino Uno Rev3 compatible overlays</li>
                    <li>
                      Standard STMicroelectronics Morpho pins, allowing access
                      to all microcontroller pins
                    </li>
                  </ul>
                  <li>Module compatible with the mbed system</li>
                  <li>Built-in ST-LINK debugger/programmer</li>
                  <li>Power supply options:</li>
                  <ul className="list-disc list-inside">
                    <li>Via USB</li>
                    <li>Via ST-LINK</li>
                    <li>Directly via pins</li>
                  </ul>
                  <li>Built-in 3 LEDs:</li>
                  <ul className="list-disc list-inside">
                    <li>1 x indicating power supply</li>
                    <li>1 x communication LED</li>
                    <li>1 x user operation LED</li>
                  </ul>
                  <li>Two buttons:</li>
                  <ul className="list-disc list-inside">
                    <li>1 x RESET</li>
                    <li>1 x USER for user-defined purposes</li>
                  </ul>
                  <li>Three interfaces via mini USB connector:</li>
                  <ul className="list-disc list-inside">
                    <li>Virtual COM port</li>
                    <li>Mass storage</li>
                    <li>Programming/debugging port</li>
                  </ul>
                  <li>
                    Supported by popular development environments such as IAR
                    Embedded Workbench, Keil, and GCC
                  </li>
                </>
              ) : (
                <>
                  <li>Microcontroller: STM32G491RE</li>
                  <li>Core: Arm Cortex-M4 32-bit</li>
                  <li>Clock Frequency: 170 MHz</li>
                  <li>Flash Memory: 512 kB</li>
                  <li>SRAM: 96 kB</li>
                  <li>DMA: 16 channels</li>
                  <li>Interfaces:</li>
                  <ul className="list-disc list-inside">
                    <li>3 x SPI</li>
                    <li>3 x I2C</li>
                    <li>5 x UART</li>
                  </ul>
                  <li>3 x ADCs: 16-bit</li>
                  <li>4 x DACs: 12-bit</li>
                  <li>
                    Two types of connectors: Arduino Uno compatible overlays and
                    ST morpho pins
                  </li>
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
