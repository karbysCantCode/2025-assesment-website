"use client";
import * as React from "react";
import Navbar from "@/template/navbar";

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
    <div>
      <Navbar />
      <img src="/mountain_view_1.jpg" className="h-100 w-full object-cover object-center fixed top-14" style={{filter:`blur(${blur}px)`}}/>
      <section className="absolute top-114 bg-white">
        <h1 className="text-center mt-5 mb-5 text-[2rem] block">
          Welcome to Maunga Club
        </h1>

        <a className="block text-[0.7rem] width-1/2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt mollitia cum voluptatum inventore magnam voluptatem incidunt non, quaerat asperiores blanditiis ullam officia tenetur, saepe vero eos obcaecati culpa a? Ullam.
        </a>
      </section>
      <main>

      </main>
    </div>
    
    
  );
}


