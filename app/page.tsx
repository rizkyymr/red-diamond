"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    '/slide1.jpg',
    '/slide2.jpg',
    '/slide3.jpg'
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
    <div>
      {/* Header dengan Slider */}
      <header className="h-screen w-full flex flex-col items-center justify-center bg-blue-950 space-y-8 relative">
        <div className="w-full h-[400px] relative overflow-hidden mb-8">
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
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            &#10094;
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
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

        <div className="text-center z-10 px-4">
          <h1 className="text-5xl font-bold text-white">
            Selamat Datang di Red Diamonds Lab
          </h1>
          <p className="text-lg text-white/80 max-w-2xl text-center mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, 
            quod, voluptatum, voluptas quae voluptatem quibusdam voluptate quas quidem 
            natus quia. Quisquam, quae. Quisquam voluptates.
          </p>
        </div>
      </header>

      {/* Sejarah Section */}
      <main id="main" className="h-screen w-full bg-gray-500">
        <div className="pt-20 pb-10 text-center">
          <div className="inline-block">
            <h1 className="text-4xl font-bold text-white uppercase tracking-wider">
              Sejarah
            </h1>
            <div className="h-1 bg-white mt-4"></div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            <div className="w-1/2 space-y-8">
              <div className="bg-black rounded-lg p-8 h-64 shadow-lg flex items-center justify-center">
                <p className="text-white text-center text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates deserunt,
                  explicabo amet consectetur modi dignissimos pariatur.
                </p>
              </div>
              <div className="bg-black rounded-lg p-8 h-64 shadow-lg flex items-center justify-center">
                <p className="text-white text-center text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates deserunt,
                  explicabo amet consectetur modi dignissimos pariatur.
                </p>
              </div>
            </div>

            <div className="w-1/2">
              <div className="bg-black rounded-lg p-8 h-[544px] shadow-lg flex items-center justify-center">
                <p className="text-white text-center text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates deserunt,
                  explicabo amet consectetur modi dignissimos pariatur. Repellendus magnam beatae
                  exercitationem dolorum necessitatibus quos iste, maiores nisi totam, laborum natus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Contact Us Section */}
      <footer id="footer" className="w-full bg-blue-950">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-10">
            <div className="inline-block">
              <h1 className="text-4xl font-bold text-white uppercase tracking-wider">
                Contact Us
              </h1>
              <div className="h-1 bg-white mt-4"></div>
            </div>
          </div>

          <div className="flex gap-20">
            <div className="w-1/2 text-white">
              <h2 className="text-3xl font-bold mb-6">Office</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Address</h3>
                  <p className="text-gray-300">
                    Jl. White Diamond V Jelupang, Kec.Serpong Utara<br />
                    Tanggerang Selatan, Banten<br />
                    Indonesia
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-gray-300">+62 818 708 211</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-300">example@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Marketplace</h3>
                  <a 
                    href="https://www.tokopedia.com/reddiamondlab" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Tokopedia
                  </a>
                </div>
              </div>
            </div>

            <div className="w-1/2">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-white">Send Message!</h2>
              </div>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-white"
                />
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-white"
                ></textarea>
                <button
                  type="submit"
                  className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="w-full bg-white">
          <div className="container mx-auto px-4 py-2">
            <div className="flex justify-between items-center text-sm text-gray-600">
              <div className="flex gap-4">
                <a href="#" className="hover:text-gray-900 transition-colors">Sitemap</a>
                <span>|</span>
                <a href="#" className="hover:text-gray-900 transition-colors">Terms & Conditions</a>
                <span>|</span>
                <a href="#" className="hover:text-gray-900 transition-colors">FAQ</a>
              </div>
              <div>
                © 2024 RED DIAMONDS LAB
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}