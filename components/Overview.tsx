import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function History() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main id="main" className="min-h-screen w-full bg-gray-200">
      <div className="pt-20 pb-10 text-center">
        <div className="inline-block">
          <h1 className="text-2xl md:text-4xl font-bold text-black uppercase tracking-wider font-customFont">
            Overview
          </h1>
          <div className="h-1 bg-black mt-4"></div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 space-y-8">
            <div
              className="flex flex-col bg-blue-gray rounded-lg p-8 h-auto shadow-lg"
              data-aos="fade-up"
            >
              <h1 className="text-1xl md:text-3xl text-white font-bold">
                Vision —
              </h1>
              <p className="text-white text-sm md:text-lg">
                To become a trusted and innovative company in providing
                affordable and easily accessible electronic development board
                solutions for domestic developers, students and industry, as
                well as encouraging creativity in the field of technology and
                electronic engineering.
              </p>
            </div>
            <div
              className="flex-col bg-blue-gray rounded-lg p-8 h-auto shadow-lg flex"
              data-aos="fade-up"
            >
              <h1 className="text-1xl md:text-3xl text-white font-bold">
                Mission —
              </h1>
              <p className="text-white text-sm md:text-lg">
                1. Produce electronic development boards that are reliable,
                easy to use, and in line with ever-growing market needs.
              </p>
              <p className="text-white text-sm md:text-lg">
                2. Continuously update products with the latest technology and
                provide the best support for users so they can develop their
                projects easily and efficiently.
              </p>
              <p className="text-white text-sm md:text-lg">
                3. Collaborate with educational institutions and the technology
                community to inspire new generations to explore electronic
                technology through our products and training programs.
              </p>
              <p className="text-white text-sm md:text-lg">
                4. Forge long-term relationships with customers through
                products and services that are reliable, transparent and
                focused on their needs.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div
              className="flex-col bg-blue-gray rounded-lg p-8 h-auto shadow-lg flex"
              data-aos="fade-up"
            >
              <h1 className="text-1xl md:text-3xl text-white font-bold">
                Goals —
              </h1>
              <p className="text-white text-sm md:text-lg">
                The company aims to be a provider of innovative, high quality
                and affordable electronic development board solutions, so it
                can be accessed by various groups ranging from students to
                professionals. By presenting products that are easy to use and
                supported by complete documentation and responsive customer
                service, we are committed to improving user technology
                capabilities, supports exploration and development of technical
                skills, and encourages the growth of a solid community. We also
                have partnerships with educational institutions and the
                technology community, providing relevant training and
                development programs. Through cost optimization and strict
                quality standards, the company is determined to create reliable
                products, increase technological accessibility and become an
                important part in the progress of the global electronics
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
