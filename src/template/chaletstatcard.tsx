import React from "react"; 
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning'; {/*child icon*/ }
import PersonIcon from '@mui/icons-material/Person'; {/*adult icon*/ }


import { chaletData, ChaletName } from "@/app/config";
import { Elevator } from "@mui/icons-material";
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
                    <div className="w-24 flex flex-row content-center bg-white justify-between p-5 mr-5 shadow-md rounded-full hover:bg-slate-200">
                        <a className="pr-2" >{chalet.adults}</a>
                        <PersonIcon />
                    </div>
                    <div className="w-24 flex flex-row content-center bg-white justify-between p-5 shadow-md rounded-full hover:bg-slate-200">
                        <a className="pr-2" >{chalet.children}</a>
                        <EscalatorWarningIcon />
                    </div>
                  </div>
                  <Button variant="contained" className="md:!block !hidden !h-10 !m-auto !mt-5">
                    Book Now!
                  </Button>
                </section>
                
                <img src={chalet.image} alt={chalet.name} className="rounded-md md:m-0 mt-5 h-auto max-w-100"/>
            </article>

            {/* slim screen stats and book buttons */}
            <div className="md:hidden flex md:flex-row flex-col content-center justify-start pt-5">
              <div className="flex flex-row content-center md:justify-start justify-start">
                <div className="w-24 flex flex-row content-center bg-white justify-between p-5 mr-5 shadow-md rounded-full hover:bg-slate-200">
                    <a className="pr-2" >{chalet.adults}</a>
                    <PersonIcon />
                </div>
                <div className="w-24 flex flex-row content-center bg-white justify-between p-5 shadow-md rounded-full hover:bg-slate-200">
                    <a className="pr-2" >{chalet.children}</a>
                    <EscalatorWarningIcon />
                </div>
              </div>

              <Button variant="contained" className="!h-10 md:!ml-12 md:!mt-auto md:!mb-auto !mt-5">
                Book Now!
              </Button>
                
                
            </div>
        </main>
    )
}