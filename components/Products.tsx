import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

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
];

export default function Products() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
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
            <div className='bg-white w-full h-screen '>
                <div className='text-center'>
                    <div className="inline-block">
                        <h1 className="text-4xl font-bold text-black uppercase tracking-wider mt-10 font-customFont">
                            Products
                        </h1>
                        <div className="h-1 bg-black mt-4"></div>
                    </div>
                    <p className="text-black/80 max-w-2xl mx-auto mt-6 px-4 font-serif">
                        Here are some of the products we offer you —
                    </p>
                </div>
                <section className="container mx-auto px-4 py-16">
                    <div className={`flex justify-between items-start transform transition-transform duration-5000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-40 opacity-0'}`} ref={ref}>
                        <div className="flex overflow-x-auto gap-8">
                            {products.map((product, index) => (
                                <div
                                    key={index}
                                    className="relative group cursor-pointer overflow-hidden rounded-2xl w-80 bg-white shadow-lg p-4 border-4 border-black"
                                >
                                    <div className="relative h-[300px] w-full">
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-2xl"
                                        />
                                    </div>
                                    <div className="flex flex-col items-center mt-4">
                                        <h3 className="text-black text-2xl font-bold tracking-wider">
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
                        <div className='mt-4 flex items-center'>
                            <div className="flex items-center justify-center bg-blue-500 text-white rounded-full px-4 py-2">
                                <Link href="/viewall" className="text-center">
                                    View All
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
} 