import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Product {
  title: string;
  image: string;
  link: string;
}

const products: Product[] = [
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
    title: "Board Controller Power Supply Hydraulic",
    image: "/product4.png",
    link: "/product4",
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
];

export default function Products() {
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    AOS.init();
  
    const currentRef = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        products.forEach((product, index) => {
          setTimeout(() => {
            setVisibleProducts((prev) => [...prev, product]);
          }, index * 200);
        });
      } else {
        setVisibleProducts([]);
      }
    });
  
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <main id="products">
      <div className="bg-white w-full h-screen">
        <div className="text-center">
          <div className="inline-block">
            <h1 className="text-2xl md:text-4xl font-bold text-black uppercase tracking-wider mt-10 font-customFont">
              Products
            </h1>
            <div className="h-1 bg-black mt-4"></div>
          </div>
          <p className="text-black/80 max-w-2xl text-sm md:text-lg mx-auto mt-6 px-4 font-serif">
            Our Best Selling Product —
          </p>
        </div>
        <section className="container mx-auto px-4 py-16">
          <div className="flex justify-between items-center mb-4">
            <div></div>
            <Link
              href="/viewall"
              className="bg-blue-500 text-white text-sm md:text-base rounded-full px-2 py-1 md:px-4 md:py-4 hover:bg-blue-600"
            >
              View All Products
            </Link>
          </div>
          <div className={`flex overflow-x-auto gap-8`} ref={ref}>
            {visibleProducts.map((product, index) => (
              <Link
                key={index}
                href={product.link}
                className="relative group cursor-pointer overflow-hidden rounded-2xl w-80 bg-white shadow-lg p-4 border-2 border-gray-300 flex-shrink-0 sm:w-64 md:w-72 lg:w-80"
                data-aos="fade-up"
              >
                <div className="relative h-[250px] md:h-[300px] w-full">
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
        </section>
      </div>
    </main>
  );
}
