import React from "react"; 
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning'; {/*child icon*/ }
import PersonIcon from '@mui/icons-material/Person'; {/*adult icon*/ }


import { chaletData } from "@/app/config";
import { Elevator } from "@mui/icons-material";

type ChaletStatCardProps = {
  chaletName: string;
};
export default function ChaletStatCard({ chaletName }: ChaletStatCardProps) {
    const chalet = Object.values(chaletData).find(c => c.name === chaletName);
    console.log(chaletData, chaletName, chalet);
    if (!chalet) return null;
    return (
        <main className="flex flex-col bg-white w-auto h-auto p-10 m-10 rounded-md shadow-md relative z-51">
            <section className="flex flex-row content-center justify-between">
                <h2>{chalet.name}</h2>
                <img src={chalet.image} alt={chalet.name} />
            </section>
            <div className="flex flex-row content-center justify-between pt-5">
                <div className="flex flex-row content-center bg-white justify-between p-5 shadow-2xl rounded-full">
                    <a>{chalet.adults}</a>
                    <PersonIcon />
                </div>
                <div className="flex flex-row content-center bg-white justify-between p-5 shadow-2xl rounded-full">
                    <a>{chalet.children}</a>
                    <EscalatorWarningIcon />
                </div>
            </div>
        </main>
    )
}