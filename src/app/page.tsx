import Image from "next/image";
import FeatureAccordion from "../components/FeatureAccordion";

import LivingRoom from "../../public/images/living_room.webp";
import ModelShowcase from "../components/ModelShowcase";

export default function Photoreal3DPage() {
  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white h-full md:h-dvh overflow-hidden">
        <video autoPlay loop muted playsInline className="w-full h-full">
          <source src="/video/model.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* AI-Powered Section */}
      <section className="py-10 md:py-20  bg-white ">
        <div className="max-w-[1297px] grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto">
          <div className="px-6">
            <h2 className="text-[32px] md:text-[44px] font-semibold text-[#1b4964]">
              Unleash <span className="text-[#1771e8] font-medium">Photorealistic 3D</span> Content With Our
              <br /> <span className="text-[#1771e8] font-medium">AI-Powered</span> Unreal Engine Ecosystem
            </h2>
            <p className=" text-gray-600 py-8">Perfect for 3D configuration, immersive experiences, product photography, videos, and 3D spins.</p>

            <FeatureAccordion />
          </div>
          <div>
            <Image src={LivingRoom} alt="Living Room" />
          </div>
        </div>
      </section>

      <section className="bg-[#0B1B35] py-10 md:py-20 px-6">
        <div className="max-w-[1297px] mx-auto ">
          <h2 className="text-center text-2xl sm:text-4xl font-bold text-white max-w-[30ch] mx-auto leading-8 sm:leading-14">A COMPLETE TOOLCHAIN FOR NEXT GENERATION MARKETING</h2>

          <div className="mt-12 sm:mt-26">
            {/* <div>
              <img src="/sofa.png" alt="Metabox" className="mb-4" />
              <h3 className="text-xl font-bold mb-2">METABOX</h3>
              <p className="text-gray-200 mb-4">Store and share your native 3D assets from one safe, organized place. Connect to ERPs, manage distribution, and more.</p>
              <button className="bg-green-500 text-white px-4 py-2 rounded">Learn more</button>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">METABOX STUDIO</h3>
              <p className="text-gray-200 mb-4">
                Configure, compose, and capture scenes in minutes. No fiddling with sun & lighting and environment effects. The power of full technology studio in your fingertips with instant results.
              </p>
              <button className="bg-green-500 text-white px-4 py-2 rounded">Learn more</button>
            </div> */}
            <ModelShowcase />
          </div>
        </div>
      </section>

      {/* 
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">PHOTOREAL 3D CONFIGURATORS</h3>
            <p className="text-gray-700 mb-4">Enable your customers to customize, visualize, price and order the products they want in unparalleled photorealistic quality.</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Learn more</button>
          </div>
          <div>
            <img src="/stroller.png" alt="3D Configurator" className="rounded-lg" />
          </div>
        </div>
      </section>

 
      <section className="bg-gray-100 py-20 px-4 md:px-16">
        <h2 className="text-center text-xl md:text-3xl font-semibold mb-10">SOLUTIONS FOR YOUR INDUSTRY</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "ECOMMERCE",
              text: "Increase conversions, speed up sales, and reduce returns.",
            },
            {
              title: "MANUFACTURING",
              text: "Deploy your product in every customization and innovate faster.",
            },
            {
              title: "REAL ESTATE",
              text: "Stage and display photorealistic interactive 3D experiences before space is even created.",
            },
            {
              title: "CPG",
              text: "Produce and manage marketing assets at lightning speed.",
            },
          ].map(({ title, text }, i) => (
            <div key={i} className="bg-white shadow-md p-6 rounded">
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0B1B35] text-white py-12 text-center">
        <h2 className="text-xl md:text-3xl font-semibold mb-6">UNLOCK THE POWER OF PHOTOREAL 3D MARKETING TECHNOLOGY</h2>
        <button className="bg-green-500 text-white px-6 py-3 rounded">Book a Demo</button>
      </section>

   
      <footer className="bg-[#08152B] text-white py-8 text-center text-sm">
        <img src="/epic-megagrant.png" alt="Epic MegaGrant" className="mx-auto mb-4" />
        <p className="text-xs">© 3D Source 2025. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4 text-xs">
          <span>Modules</span>
          <span>Configurator</span>
          <span>Cloud Streaming</span>
          <span>Service</span>
          <span>HQ</span>
        </div>
      </footer> */}
    </div>
  );
}
