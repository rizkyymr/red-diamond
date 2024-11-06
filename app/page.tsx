"use client";
import ImageSlider from '@/components/ImageSlider';
import History from '@/components/History';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import Products from '@/components/Products';

export default function Page() {
  return (
    <div>
      <Nav />
      <ImageSlider />
      <Products />
      <History />
      <Footer />
    </div>
  );
}