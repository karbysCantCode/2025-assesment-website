import React from "react"; 
import Image from "next/image";
import { Button } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

import { chaletData, ChaletName } from "@/app/config";
type ChaletStatCardProps = {
  chaletName: ChaletName;
};

export default function ChaletShowcaseCard({ chaletName }: ChaletStatCardProps) {
  const chalet = chaletData[chaletName];
  if (!chalet) return null;
  const handleClick = () => {
    window.location.assign("/bookings")
  };
  return (
    <section className="relative flex flex-col bg-white m-10 rounded-md shadow-md md:w-200 md:h-155 pb-10 divide-y-2 divide-slate-200 justify-between">
      <section className="flex md:flex-row flex-col justify-center ">
        <h1 className="text-[2rem] p-5 md:ml-10 md:mr-10 mr-auto ml-auto">{chalet.name}</h1>
        {/*wide screen button*/}
        <Button variant="contained" className="!hidden md:!block !h-10 !ml-90 !mt-auto !mb-auto !mt-5 !max-w-10000000 !max-w-30" onClick={handleClick}>
          Book Now!
        </Button>
      </section>
      <Button variant="contained" className="!block md:!hidden !h-10 !mt-10 !ml-auto !mr-auto !max-w-10000000 !max-w-30" onClick={handleClick}>
        Book Now!
      </Button>
      
      <section className="justify-between relative flex md:flex-row flex-col">
        <Image src={chalet.image} fill alt={chalet.name} className="!shadow-md !rounded-md !object-cover !h-auto !w-auto !max-h-110 md:!max-w-100 !ml-5 !mr-5 md:!ml-auto  md:!mr-auto !m-10 !relative md:!m-10 " />
        <aside className="flex-row content-center mr-10">
          <Image src={chalet.showcase_image_1} fill alt={chalet.name} className="!shadow-md !relative !rounded-md !object-cover !h-auto !w-auto md:!max-h-50 md:!max-w-100 !mb-10 !ml-5 !mr-5 md:!ml-auto  md:!mr-auto" />
          <Image src={chalet.showcase_image_2} fill alt={chalet.name} className="!shadow-md !relative !rounded-md !object-cover !h-auto !w-auto md:!max-h-50 md:!max-w-100 !ml-5 !mr-5 md:!ml-auto md:!mr-auto" />
        </aside>
      </section>
    </section>
  )
}