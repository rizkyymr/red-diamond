"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/home1.JPG',
    '/img2.jpg',
    '/home1.JPG',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <header className="h-auto w-full relative bg-dark-blue">
      <div className="relative w-full h-[90vh] md:h-[80vh] overflow-hidden ">
        <div 
          id='header'
          className="flex transition-transform duration-500 h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              <Image
                src={slide}
                alt={`Slide ${index + 1}`}
                fill
                sizes="100vw"
                quality={100}
                className="object-cover object-center"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        {/* Teks tetap di tempat */}
        <div className="absolute left-6 md:left-10 top-1/2 transform -translate-y-1/2 z-10 p-6 w-11/12 md:w-2/3 lg:w-1/3">
          <div className="bg-black bg-opacity-35 p-4 rounded-lg shadow-lg w-full">
            <h1 className="text-2xl md:text-4xl font-bold font-customFont text-white">
              Welcome to Red Diamonds Lab
            </h1>
            <p className="text-sm md:text-base text-white/85 mx-auto mt-2 font-sans">
              Welcome to Red Diamonds Lab! We are a trusted provider for various quality hardware needs.
              On this website, you can find complete information about our company, the products we offer,
              as well as the best services ready to support your needs.
            </p>
            <p className="text-sm md:text-base text-white/85 mx-auto mt-2 font-sans">
              We are committed to providing quality products with professional service that prioritizes customer satisfaction.
              Thank you for visiting our website. Please explore our various superior products,
              and dont hesitate to contact us if you have any questions or special needs.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
      <button 
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/75 p-1 md:p-2 rounded-full shadow-lg"
      >
        &#9664;
      </button>
      <button 
        onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/75 p-1 md:p-2 rounded-full shadow-lg"
      >
        &#9654;
      </button>
    </header>
  );
}
