"use client";
import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 py-4 xl:py-6 text-black bg-white border-b-2 border-black scroll-smooth z-50">
        <div className="container mx-auto px-6">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <Link href="/">
                        <Image
                            src="/logo2.png"
                            alt="logo"
                            width={60}
                            height={60}
                            className="object-contain"
                        />
                    </Link>
                </div>
                <div className="flex-1">
                    <Nav />
                </div>
                <div className="text-2xl invisible">
                    <div className="w-[60px]"></div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
