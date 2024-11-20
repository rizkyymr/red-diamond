"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const ProductsPage = () => {
  const handleBuy = () => {
    window.location.href =
      "https://www.tokopedia.com/rdlabs/stm32-arduino-green-pill-development-board-stm32g431cbt6?extParam=src%3Dshop%26whid%3D410203";
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
      title: "Turtle Board Heltec Automation STM32L43KC LoRaWAN Wireless Module",
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
          src="/product9.jpg"
          alt="Deskripsi Gambar"
          width={500}
          height={500}
          className="w-full md:w-1/3 h-auto object-cover rounded-lg"
        />
        <div className="flex flex-col justify-between p-4 md:pl-6 w-full md:w-2/3">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-black text-center md:text-left">
              STM32 Arduino Green Pill Development Board STM32G431CBT6
            </h2>
            <h3 className="font-bold mt-4 text-black">a. Description:</h3>
            <p className="text-sm text-black">
              STM32 Arduino Green Pill Development Board STM32G431CBT6. USB
              Type-C connector.
            </p>
            <p className="text-sm text-black">
              Mainstream Arm Cortex-M4 MCU 170 MHz with 128 Kbytes of Flash
              memory, Math Accelerator, Medium Analog level integration.
            </p>
            <p className="text-sm text-black">
              The STM32G431x6/x8/xB devices are based on the high-performance
              Arm® Cortex®-M4 32-bit RISC core. They operate at a frequency of
              up to 170 MHz.
            </p>
            <p className="text-sm text-black">
              The Cortex-M4 core features a single-precision floating-point unit
              (FPU), which supports all the Arm single-precision data-processing
              instructions and all the data types. It also implements a full set
              of DSP (digital signal processing) instructions and a memory
              protection unit (MPU), which enhances the application’s security.
            </p>
            <p className="text-sm text-black">
              These devices embed high-speed memories (up to 128 Kbytes of Flash
              memory and 32 Kbytes of SRAM), an extensive range of enhanced I/Os
              and peripherals connected to two APB buses, two AHB buses, and a
              32-bit multi-AHB bus matrix.
            </p>
            <p className="text-sm text-black">
              The devices also embed several protection mechanisms for embedded
              Flash memory and SRAM: readout protection, write protection,
              securable memory area, and proprietary code readout protection.
            </p>
            <p className="text-sm text-black">
              The devices embed peripherals allowing mathematical/arithmetic
              function acceleration (CORDIC for trigonometric functions and FMAC
              unit for filter functions).
            </p>
            <p className="text-sm text-black">
              They offer two fast 12-bit ADCs (4 Msps), four comparators, three
              operational amplifiers, four DAC channels (2 external and 2
              internal), an internal voltage reference buffer, a low-power RTC,
              one general-purpose 32-bit timer, two 16-bit PWM timers dedicated
              to motor control, seven general-purpose 16-bit timers, and one
              16-bit low-power timer.
            </p>
            <p className="text-sm text-black">
              They also feature standard and advanced communication interfaces
              such as:
            </p>
            <ul className="list-disc list-inside text-sm text-black">
              <li>Three I2Cs</li>
              <li>Three SPIs multiplexed with two half-duplex I2Ss</li>
              <li>Three USARTs, one UART, and one low-power UART</li>
              <li>One FDCAN</li>
              <li>One SAI</li>
              <li>USB device</li>
              <li>UCPD</li>
            </ul>
            <p className="text-sm text-black">
              The devices operate in the -40 to +85 °C (+105 °C junction) and
              -40 to +125 °C (+130 °C junction) temperature ranges from a 1.71
              to 3.6 V power supply. A comprehensive set of power-saving modes
              allows the design of low-power applications.
            </p>
            <p className="text-sm text-black">
              Some independent power supplies are supported including an analog
              independent supply input for ADC, DAC, OPAMPs, and comparators. A
              VBAT input allows backup of the RTC and the registers.
            </p>
            <p className="text-sm text-black">
              The STM32G431x6/x8/xB family offers 9 packages from 32-pin to
              100-pin.
            </p>
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
