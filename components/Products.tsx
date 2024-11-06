import Image from 'next/image';

const products = [
    {
        title: "Product1",
        image: "/product1.jpg",
        link: "#"
    },
    {
        title: "Product2",
        image: "/product2.jpg",
        link: "#"
    }
];

export default function Products() {
    return (
        <main id='products'>
            <div className='containe bg-custom-red1 w-full h-screen'>
                <div className='text-center'>
                    <div className="inline-block text-center">
                        <h1 className="text-4xl font-bold text-white uppercase tracking-wider mt-10 font-customFont">
                            Products
                        </h1>
                        <div className="h-1 bg-white mt-4"></div>
                    </div>
                    <p className="text-white/80 max-w-2xl mx-auto mt-6 px-4 font-serif">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, 
                        quod, voluptatum, voluptas quae voluptatem quibusdam voluptate quas quidem 
                        natus quia. Quisquam, quae. Quisquam voluptates.
                    </p>
                </div>
                <section className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-2 gap-8">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="relative group cursor-pointer overflow-hidden rounded-2xl"
                            >
                                <div className="relative h-[400px] w-full">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-2xl"
                                    />
                                    <div className="absolute inset-0 bg-gray-500/50 group-hover:bg-custom-red3/25 transition-colors duration-300 rounded-2xl" />

                                    <div className="absolute inset-0 flex items-end justify-center mb-5">
                                        <h3 className="text-white text-3xl font-bold tracking-wider">
                                            {product.title}
                                        </h3>
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