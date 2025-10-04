"use client";
// neccessary imports
import * as React from "react";
import Navbar from "@/template/navbar";
import Footer from "@/template/footer";
import { clubBenefits } from "@/app/config";
import Image from "next/image";
import ScrollButton from "@/template/scrollButton";
import Button from "@mui/material/Button";

export default function Bookings() {
  return (
    <main className="md:bg-white bg-slate-200">
      <Navbar/>
      {/*navbar spacer*/}
      <div className="pb-14"/>
      {/*heading banner*/}
      <div className="flex flex-col content-center bg-white text-center w-full relative py-10 shadow-xl">
        <h2 className="text-xl">
          Join our club,
        </h2>
        <h1 className="text-4xl font-bold">
          <i>TODAY</i>
        </h1>
      </div>
      {/*benefits of the club section*/}
      <div className="md:justify-normal justify-around relative items-stretch">
        <Image src={"/maunga_club_cabin.jpg"} fill alt="Maunga Club Cabin" className=" !w-full !static md:!object-cover md:block hidden" ></Image>
      
        <div className="flex flex-col divide-y-2 divide-slate-200 container md:mx-5 mx-5 md:mb-0 mb-10 text-center bg-white rounded-md shadow-2xl md:absolute relative md:top-23 mt-10 md:ml-10 md:w-100 w-auto md:m-0 h-auto z-10">
          <h2 className="text-3xl py-4 px-2 font-semibold">
            Benefits of joining<br/> the club:
          </h2>
          {/*list of benefits*/}
          <ul className="text-left p-5 list-disc pl-10">
            {clubBenefits.map((benefit, idx) => (
              <li key={idx} className="text-slate-700">{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
      {/*how to join the club section*/}
      <div className="flex flex-col divide-y-2 divide-slate-200 text-center bg-white shadow-2xl relative md:w-[90%] w-full mx-auto z-10">
        <h2 className="text-3xl py-4 px-2 font-semibold">
          <i>&quot;How do I join the club?&quot;</i>
        </h2>
        <div className="py-5">
          <Button variant="contained" href="/register" className=" !h-20 !m-auto !w-fit !content-center !rounded-xl !bg-cyan-200 !text-black">
            Register With<br/>Maunga Club Now!
          </Button>
        </div>
        <h2 className="text-3xl py-4 px-2 font-semibold">
          OR
        </h2>
        <div>
          <p className="py-5 text-xl">
            Email maungaclub@maungaclub.maungaclub the following information:
          </p>
          <ul className="text-left p-5 list-disc pl-10">
            <li> Full Name. </li>
            <li> Physical Address. </li>
            <li> Proof of Address (eg copy of power bill). </li>
            <li> Proof of ID (driver&apos;s license or passport). </li>
          </ul>
          <p className="py-5 text-left px-5">
            Membership will be confirmed by email. <br></br>
            Additional information about the Club and accommodation (membership letter) will be sent
            by regular mail.
          </p>
        </div>
      </div>
      {/*the button to show to the user that they can scroll because it may not be obvious to the user*/}
      <ScrollButton/>
      <Footer/>
    </main>
  )
}