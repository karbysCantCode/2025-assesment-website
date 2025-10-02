"use client";
import * as React from "react";
import Navbar from "@/template/navbar";
import Footer from "@/template/footer";
import ChaletStatCard from "@/template/chaletstatcard";
import { ChaletName, chaletData, siteConfig } from "@/app/config";
import Image from "next/image";
import cookies from "js-cookie";
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export default function Bookings() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isBooking, setIsBooking] = React.useState(false);
  const [selectedChalet, setSelectedChalet] = React.useState<ChaletName | null>(null);

  if (cookies.get("logged_in") === "true" && !isLoggedIn) {
    setIsLoggedIn(true);
  }

  function handleBooking(chaletName: ChaletName) {
    const chalet = chaletData[chaletName];
    if (!chalet) return;
    setSelectedChalet(chaletName);
    setIsBooking(true);
  }

  function closeBooking() {
    setIsBooking(false);
    setSelectedChalet(null);
  }
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
        <ChaletStatCard key={chaletData[chaletName].name} inverted={(index%2===1)} chaletName={chaletName} handleClick={handleBooking}/>
      ))}
      {isBooking && selectedChalet && (
        <div className="fixed inset-0 bg-transparent z-60 flex items-center justify-center">
          <div className="absolute inset-0 bg-opacity-20 backdrop-blur-sm"></div>

          <div className="fixed bg-white rounded-md shadow-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-auto z-60 p-5 pt-0">
            <IconButton className="absolute top-2 left-[90%]" onClick={closeBooking} style={{ transform: 'none' }} >
              <CloseIcon />
            </IconButton>
            <div className="h-5"></div>
            {isLoggedIn ? (
              <p>You are booking: {chaletData[selectedChalet].name}</p> 
            ) : (
              <div className="flex flex-col content-center justify-center">
                <p className="text-center text-xl mx-auto">Join the club to arrange a booking!</p>
                <a href="/register" className="text-cyan-400 text-center pt-5">Register here</a>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer/>
    </main>
  )
}