"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const ProductsPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleBuy = () => {
    window.location.href =
      "https://www.tokopedia.com/rdlabs/stm32-stm32u5-u575-vgt6-100pin-development-board-microcontroller-microsoft-azure-threadx-usb-type-c-board-only-87511?extParam=src%3Dshop%26whid%3D410203";
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
          src="/product2.jpg"
          alt="Deskripsi Gambar"
          width={500}
          height={500}
          className="w-full md:w-1/3 h-auto object-cover rounded-lg"
        />
        <div className="flex flex-col justify-between p-4 md:pl-6 w-full md:w-2/3">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-black text-center md:text-left">
              STM32U5 Development Board Microcontroller
            </h2>
            <h3 className="font-bold mt-4 text-black">a. Description:</h3>
            <p className="text-sm text-black">
              The STM32U575xx devices belong to an ultra-low-power
              microcontrollers family (STM32U5 series) based on the
              high-performance Arm® Cortex®-M33 32-bit RISC core. They operate
              at a frequency of up to 160 MHz. The Cortex®-M33 core features a
              single-precision FPU (floating-point unit), that supports all the
              Arm® single-precision data-processing instructions and all the
              data types. The Cortex®-M33 core also implements a full set of DSP
              (digital signal processing) instructions and a MPU (memory
              protection unit) that enhances the application security.
            </p>
            <h3 className="font-bold mt-4 text-black">b. Key features:</h3>
            <ul className="list-disc list-inside text-sm text-black">
              {isExpanded ? (
                <>
                  <li>Includes ST state-of-the-art patented technology</li>
                  <li>Ultra-low-power with FlexPowerControl:</li>
                  <ul className="list-disc list-inside">
                    <li>1.71 V to 3.6 V power supply</li>
                    <li>–40 °C to +85/125 °C temperature range</li>
                    <li>
                      Low-power background autonomous mode (LPBAM): autonomous
                      peripherals with DMA, functional down to Stop 2 mode
                    </li>
                    <li>
                      VBAT mode: supply for RTC, 32 x 32-bit backup registers
                      and 2-Kbyte backup SRAM
                    </li>
                    <li>160 nA Shutdown mode (24 wake-up pins)</li>
                    <li>210 nA Standby mode (24 wake-up pins)</li>
                    <li>530 nA Standby mode with RTC</li>
                    <li>1.9 μA Stop 3 mode with 16-Kbyte SRAM</li>
                    <li>4.3 µA Stop 3 mode with full SRAM</li>
                    <li>4.0 µA Stop 2 mode dengan 16-Kbyte SRAM</li>
                    <li>8.95 µA Stop 2 mode dengan full SRAM</li>
                    <li>19.5 μA/MHz Run mode @ 3.3 V</li>
                  </ul>
                  <li>
                    Core: Arm® 32-bit Cortex®-M33 CPU with TrustZone®, MPU, DSP,
                    and FPU
                  </li>
                  <li>
                    ART Accelerator: 8-Kbyte instruction cache allowing
                    0-wait-state execution from flash and external memories: up
                    to 160 MHz, 240 DMIPS
                  </li>
                  <li>
                    Power management: Embedded regulator (LDO) and SMPS
                    step-down converter supporting switch on-the-fly and voltage
                    scaling
                  </li>
                  <li>
                    Benchmarks: 1.5 DMIPS/MHz (Drystone 2.1), 651 CoreMark®
                    (4.07 CoreMark®/MHz), 450 ULPMark™-CP, 109 ULPMark™-PP, 51.5
                    ULPMark™-CM, 133000 SecureMark™-TLS
                  </li>
                  <li>
                    Memories: 2-Mbyte flash memory with ECC, 2 banks
                    read-while-write, including 512 Kbytes with 100 kcycles
                  </li>
                  <li>
                    Security: Arm® TrustZone® and securable I/Os, memories, and
                    peripherals
                  </li>
                  <li>Clock management: 4 to 50 MHz crystal oscillator</li>
                  <li>
                    General-purpose input/outputs: Up to 136 fast I/Os with
                    interrupt capability most 5V-tolerant
                  </li>
                  <li>Up to 17 timers and 2 watchdogs</li>
                  <li>Up to 22 communication peripherals</li>
                  <li>
                    16- and 4-channel DMA controllers, functional in Stop mode
                  </li>
                  <li>
                    Graphic features: Chrom-ART Accelerator (DMA2D) for enhanced
                    graphic content creation
                  </li>
                  <li>
                    Mathematical coprocessor: CORDIC for trigonometric functions
                    acceleration
                  </li>
                  <li>Up to 22 capacitive sensing channels</li>
                  <li>Rich analog peripherals (independent supply)</li>
                  <li>ECOPACK2 compliant packages</li>
                </>
              ) : (
                <>
                  <li>Includes ST state-of-the-art patented technology</li>
                  <li>Ultra-low-power with FlexPowerControl:</li>
                  <ul className="list-disc list-inside">
                    <li>1.71 V to 3.6 V power supply</li>
                    <li>–40 °C to +85/125 °C temperature range</li>
                  </ul>
                  <li>
                    Core: Arm® 32-bit Cortex®-M33 CPU with TrustZone®, MPU, DSP,
                    and FPU
                  </li>
                  <li>
                    ART Accelerator: 8-Kbyte instruction cache allowing
                    0-wait-state execution from flash and external memories: up
                    to 160 MHz, 240 DMIPS
                  </li>
                  <li>
                    Power management: Embedded regulator (LDO) and SMPS
                    step-down converter supporting switch on-the-fly and voltage
                    scaling
                  </li>
                  <li>Up to 17 timers and 2 watchdogs</li>
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
