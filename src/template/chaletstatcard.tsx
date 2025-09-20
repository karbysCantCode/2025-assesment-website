import React from "react"; 
import Image from "next/image";
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning'; {/*child icon*/ }
import PersonIcon from '@mui/icons-material/Person'; {/*adult icon*/ }


import { chaletData, ChaletName } from "@/app/config";
import { Button } from "@mui/material";

type ChaletStatCardProps = {
  chaletName: ChaletName;
};
export default function ChaletStatCard({ chaletName }: ChaletStatCardProps) {
    const chalet = chaletData[chaletName];
    if (!chalet) return null;
    return (
        <main className="flex flex-col bg-white md:w-auto max-w-200 h-auto p-10 m-10 rounded-md shadow-md relative z-51">
            <article className="flex md:flex-row flex-col content-center justify-between">
                <section className="divide-y-2 divide-slate-200">
                  <h2 className="pb-5 mb-5 text-[2rem]">{chalet.name}</h2>
                  <ul className="pl-5 mt-5 pb-5 list-disc">
                    {chalet.features.map((feature) => (
                      <li className="md:max-w-60" key={feature}>
                        <a>{feature}</a>
                      </li>
                    )
                  )}
                  </ul>
                  {/* wide screen stats and book buttons */}
                  <div className="md:flex hidden flex-row content-center justify-around pt-5 pb-5">
                    <div className="w-24 flex flex-row relative content-center group bg-white justify-between p-5 mr-5 shadow-md rounded-full hover:bg-slate-200">
                        <a className="pr-2" >{chalet.adults}</a>
                        <PersonIcon />
                        <span className="z-999 absolute top-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-xs px-2 py-1 rounded">
                          Number of adults
                        </span>
                    </div>
                    <div className="w-24 flex flex-row content-center bg-white group relative justify-between p-5 shadow-md rounded-full hover:bg-slate-200">
                        <a className="pr-2" >{chalet.children}</a>
                        <EscalatorWarningIcon />
                        <span className="z-999 absolute top-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-xs px-2 py-1 rounded">
                          Number of children
                        </span>
                    </div>
                  </div>
                  <Button variant="contained" className="md:!block !hidden !h-10 !m-auto !mt-5">
                    Book Now!
                  </Button>
                </section>
                
                <Image src={chalet.image} fill alt={chalet.name} className="!rounded-md md:!m-0 !mt-5 !h-auto !max-w-100 !relative"/>
            </article>

            {/* slim screen stats and book buttons */}
            <div className="md:hidden flex md:flex-row flex-col content-center justify-start pt-5">
              <div className="flex flex-row content-center md:justify-start justify-start">
                <div className="w-24 flex flex-row content-center relative group bg-white justify-between p-5 mr-5 shadow-md rounded-full hover:bg-slate-200">
                    <a className="pr-2" >{chalet.adults}</a>
                    <PersonIcon />
                    <span className="z-999 absolute top-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-xs px-2 py-1 rounded">
                      Number of adults
                    </span>
                </div>
                <div className="w-24 flex flex-row content-center relative group bg-white justify-between p-5 shadow-md rounded-full hover:bg-slate-200">
                    <a className="pr-2" >{chalet.children}</a>
                    <EscalatorWarningIcon />
                    <span className="z-999 absolute top-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-xs px-2 py-1 rounded">
                      Number of children
                    </span>
                </div>
              </div>

              <Button variant="contained" className="!h-10 md:!ml-12 md:!mt-auto md:!mb-auto !mt-5">
                Book Now!
              </Button>
                
                
            </div>
        </main>
    )
}