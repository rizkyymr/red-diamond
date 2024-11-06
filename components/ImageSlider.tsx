"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    '/img1.jpeg',
    '/img2.jpeg',
    '/img3.jpeg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <header className="h-screen w-full flex flex-col items-center justify-center bg-custom-red1 space-y-8 relative">
      <div className="w-full h-[600px] relative overflow-hidden mb-8">
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

        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-custom-red2 p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          &#10094;
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-custom-red2 p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          &#10095;
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="text-center z-10 px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-white font-customFont">
          Selamat Datang di Red Diamonds Lab
        </h1>
        <p className="text-lg text-white/80 mx-auto mt-4 font-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, 
          quod, voluptatum, voluptas quae voluptatem quibusdam voluptate quas quidem 
          natus quia. Quisquam, quae. Quisquam voluptates.
        </p>
      </div>
    </header>
  );
}
