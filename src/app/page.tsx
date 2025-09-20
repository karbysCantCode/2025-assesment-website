"use client";
import * as React from "react";
import Navbar from "@/template/navbar";
import Footer from "@/template/footer";
import ChaletStatCard from "@/template/chaletstatcard";
import { ChaletName, chaletData, siteConfig } from "@/app/config";

export default function Home() {

  const [blur, setBlur] = React.useState(0);
  React.useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const maxScroll = window.innerHeight/2;
      const maxBlur = 3;
      const newBlur = Math.min((scroll/maxScroll) * maxBlur, maxBlur);
      setBlur(newBlur);
      console.log(newBlur);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="bg-gray-200 h-">
      <Navbar />
      <img src="/mountain_view_1.jpg" className="md:h-100 h-50 w-full object-cover object-center fixed top-14 z-10" style={{filter:`blur(${blur}px)`}}/>
      <main className="relative md:top-114 top-64 z-50">
        <section className="relative bg-white w-full h-auto">
          <h1 className="text-center pt-5 text-[1.5rem] text-black block">
            Welcome to
          </h1>
          <h1 className="text-center pb-5 text-[2rem] text-black font-bold block">
            Maunga Club
          </h1>
        </section>
        <section>
          <img src="/mountain_view_dark.jpg" className="md:h-200 h-200 w-full object-cover object-center"></img>
          <aside className="flex flex-col divide-y-2 divide-stone-200 absolute top-40 md:left-10 left-5 mr-5 md:w-100 h-auto w-[90%] bg-white p-5 rounded-md shadow-md max-w-md">
            <h2 className="text-2xl font-bold pb-5 mb-5">About Maunga Club</h2>
            <p className="md:text-[1rem] text-[0.95rem] text-gray-700 pb-5 mb-5">
              Maunga Club is a community of snow and ski enthusiasts who enjoy exclusive access to chalets right on the mountain. Members can book weekend stays (Friday-Sunday) at one of three shared chalets, each offering comfortable accommodation for groups of 6 to 40 people. With ski-in, ski-out convenience, the chalets sit at the heart of 550 hectares of terrain—home to New Zealand's longest ski and snowboard season. Joining Maunga Club means more than just a place to stay; it's about being part of a mountain community.          
            </p>
            <p className="md:text-[1rem] text-[0.95rem] text-gray-700">
              Each chalet has its own character and capacity, making it easy to find the right fit for your group. Whether you're planning a small weekend getaway or a larger alpine adventure, there's a chalet to suit your needs. Bookings are simple and member-only, ensuring you'll always be sharing the space with fellow snow lovers. With welcoming shared facilities and a true community atmosphere, Maunga Club chalets are more than accommodation—they're part of the mountain experience.
            </p>
          </aside>
        </section>
        <section className="bg-white w-full h-auto p-10">
          <div className="">
            <h2 className="text-2xl font-bold text-center">Our Chalets</h2>
          </div>
      
          
        </section>
        <article className="flex md:flex-col flex-col">
          {(Object.keys(chaletData) as ChaletName[]).map((chaletName) => (
            <ChaletStatCard key={chaletData[chaletName].name} chaletName={chaletName} />
          ))}
        </article>
        
        <Footer />
      </main>
    </div>
    
    
  );
}


