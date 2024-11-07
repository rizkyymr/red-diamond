"use client";
import ImageSlider from '@/components/ImageSlider';
import Overview from '@/components/Overview';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import Products from '@/components/Products';

export default function Page() {
  return (
    <div>
      <Nav />
      <ImageSlider />
      <Overview />
      <Products />
      <Footer />
    </div>
  );
}