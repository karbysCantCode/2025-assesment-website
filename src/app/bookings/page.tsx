"use client";
import * as React from "react";
import Navbar from "@/template/navbar";
import Footer from "@/template/footer";
import ChaletStatCard from "@/template/chaletstatcard";
import { ChaletName, chaletData, siteConfig } from "@/app/config";
import Image from "next/image";

export default function Bookings() {
  return (
    <main className="bg-slate-200 relative z-1">
      <Navbar/>
      <Image alt={"View from Kakapo cabin."} src={"/kakapo/cabin_view.jpg"} fill className="object-cover relative -z-2 md:blur-[0px] blur-[3px]"/>

      <div className="flex flex-col content-center bg-white text-center w-full relative top-14 py-10 shadow-xl mb-20">
        <h2 className="text-xl">
          Lets find <i>your</i> perfect
        </h2>
        <h1 className="text-4xl font-bold">
          <i>CHALET</i>
        </h1>
      </div>

      {(Object.keys(chaletData) as ChaletName[]).map((chaletName, index) => (
        <ChaletStatCard key={chaletData[chaletName].name} inverted={(index%2===1)} chaletName={chaletName} />
      ))}


      <Footer/>
    </main>
  )
}