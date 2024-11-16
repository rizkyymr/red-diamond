import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Product {
    title: string;
    image: string;
    link: string;
}

const products: Product[] = [
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
];

export default function Products() {
    const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        AOS.init();

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                products.forEach((product, index) => {
                    setTimeout(() => {
                        setVisibleProducts((prev) => {
                            console.log("Menambahkan produk:", product);
                            return [...prev, product];
                        });
                    }, index * 200);
                });
            } else {
                setVisibleProducts([]);
            }
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <main id='products'>
            <div className='bg-white w-full h-screen'>
                <div className='text-center'>
                    <div className="inline-block">
                        <h1 className="text-2xl md:text-4xl font-bold text-black uppercase tracking-wider mt-10 font-customFont">
                            Products
                        </h1>
                        <div className="h-1 bg-black mt-4"></div>
                    </div>
                    <p className="text-black/80 max-w-2xl text-sm md:text-lg mx-auto mt-6 px-4 font-serif">
                        Here are some of the products we offer you —
                    </p>
                </div>
                <section className="container mx-auto px-4 py-16">
                    <div className="flex justify-between items-center mb-4">
                        <div></div>
                        <Link href="/viewall" className="bg-blue-500 text-white text-sm md:text-base rounded-full px-2 py-1 md:px-4 md:py-4 hover:bg-blue-600">
                            View All Products
                        </Link>
                    </div>
                    <div className={`flex overflow-x-auto gap-8`} ref={ref}>
                        {visibleProducts.map((product, index) => (
                            <div
                                key={index}
                                className="relative group cursor-pointer overflow-hidden rounded-2xl w-80 bg-white shadow-lg p-4 border-4 border-black flex-shrink-0 sm:w-64 md:w-72 lg:w-80"
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
                </section>
            </div>
        </main>
    );
} 