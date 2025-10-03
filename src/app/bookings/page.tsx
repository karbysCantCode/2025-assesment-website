"use client";
import * as React from "react";
import Navbar from "@/template/navbar";
import Footer from "@/template/footer";
import ChaletStatCard from "@/template/chaletstatcard";
import { ChaletName, chaletData } from "@/app/config";
import Image from "next/image";
import cookies from "js-cookie";
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import OutlinedInput from '@mui/material/OutlinedInput';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from "dayjs";
import {Button} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const isInvalidDate = (date: Dayjs) => {
  const day = date.day();
  return !(day === 0 || day === 5 || day === 6) || date.isBefore(new Date());
}
export default function Bookings() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isBooking, setIsBooking] = React.useState(false);
  const [selectedChalet, setSelectedChalet] = React.useState<ChaletName | null>(null);

  const [childCount , setChildCount] = React.useState(0);
  const [adultCount , setAdultCount] = React.useState(0);
  const [startDate, setStartDate] = React.useState<Dayjs | null>(null);
  const [endDate, setEndDate] = React.useState<Dayjs | null>(null);

  const [invalidChildCount, setInvalidChildCount] = React.useState(false);
  const [invalidAdultCount, setInvalidAdultCount] = React.useState(false);
  const [invalidDateRange, setInvalidDateRange] = React.useState(false);

  const [success, setSuccess] = React.useState(false);

  const bookingMenuRef = React.useRef<HTMLDivElement>(null);

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

  function validateBooking() {
    setInvalidChildCount(false);
    setInvalidAdultCount(false);
    setInvalidDateRange(false);

    let validSubmission = true;

    if (!selectedChalet) {
      setIsBooking(false);
      setSelectedChalet(null);
      return false;
    }

    if (childCount < 0 || childCount > chaletData[selectedChalet].children) {
      setInvalidChildCount(true);
      validSubmission = false;
    }
    if (adultCount < 1 || adultCount > chaletData[selectedChalet].adults) {
      setInvalidAdultCount(true);
      validSubmission = false;
    }
    if (!startDate || isInvalidDate(startDate)) {
      setInvalidDateRange(true);
      validSubmission = false;
    }
    if (!endDate || isInvalidDate(endDate)) {
      setInvalidDateRange(true);
      validSubmission = false;
    }

    if (!validSubmission) {
      return false;
    }

    if (startDate!.isAfter(endDate)) {
      setInvalidDateRange(true);
      validSubmission = false;
    }

    if (startDate!.isBefore(new Date())) {
      setInvalidDateRange(true);
      validSubmission = false;
    }

    if ((startDate!.diff(endDate, "day") + 1) > (7 - ((startDate!.day() - 1)%7))) {
      setInvalidDateRange(true);
      validSubmission = false;
    }

    if (validSubmission) {
      setIsBooking(false);

      setSuccess(true);
    }

    return validSubmission;
  }

  function closeSuccess() {
    setSuccess(false);
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
      { selectedChalet && (
        <div className="fixed inset-0 bg-transparent z-60 flex items-center justify-center">
          <div className="absolute inset-0 bg-opacity-20 backdrop-blur-sm"></div>

          {isBooking && (<div ref={bookingMenuRef} className="absolute overflow-y-auto bg-white rounded-md shadow-2xl md:top-1/2 top-20 left-1/2 -translate-x-1/2 md:-translate-y-1/2 md:w-120 w-full md:h-auto h-200 md:pb-5 pb-60  z-60 p-5 pt-0">
            <IconButton className="absolute top-2 left-[90%]" onClick={closeBooking} style={{ transform: 'none' }} >
              <CloseIcon />
            </IconButton>
            <div className="h-5"></div>
            {isLoggedIn ? (
              <div className="flex flex-col content-center justify-center">
                <h2 className="text-center text-xl"><i>You are booking</i></h2>
                <h1 className="text-center text-4xl font-bold">{chaletData[selectedChalet].name}</h1>
                <div className="flex md:flex-row flex-col justify-around">
                  <div className="flex flex-col content-center justify-around mt-10">
                    <p className="m-auto">Number of adults</p>
                    <OutlinedInput placeholder={`1 - ${chaletData[selectedChalet].adults}`} className="h-10 w-30 mx-auto !rounded-full" onChange={(event) => setAdultCount(parseInt(event.target.value))}/>
                    {invalidAdultCount ?  (<p className="text-red-500 text-center h-5">Invalid number of adults</p>) : (<div className="h-5"></div>)}
                  </div>
                  <div className="flex flex-col content-center justify-around mt-10">
                    <p className="m-auto">Number of children</p>
                    <OutlinedInput placeholder={`0 - ${chaletData[selectedChalet].children}`} className="h-10 w-30 mx-auto !rounded-full" onChange={(event) => setChildCount(parseInt(event.target.value))}/>
                    {invalidChildCount ? (<p className="text-red-500 text-center">Invalid number of children</p>) : (<div className="h-5"></div>)}
                  </div>
                </div>

                <h2 className="text-center text-2xl mt-10">Arrival Date</h2>

                <div className="mx-auto">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker 
                      disablePast
                      shouldDisableDate={isInvalidDate}
                      onChange={(event) => setStartDate(event)}
                    />
                  </LocalizationProvider>
                </div>

                <h2 className="text-center text-2xl mt-10">Departure Date</h2>

                <div className="mx-auto">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker 
                      disablePast
                      shouldDisableDate={isInvalidDate}
                      onChange={(event) => setEndDate(event)}
                    />
                  </LocalizationProvider>
                </div>

                {invalidDateRange && <p className="text-red-500 text-center">Invalid date range</p>}
                <p className="text-center text-sm text-slate-500 mt-10">Chalets can only be booked from Fridays to Sundays.</p>
                <Button 
                  component="label"
                  variant="contained"
                  className="h-15 !rounded-full !bg-slate-300 !text-black !mx-29 !mt-10"
                  onClick={validateBooking}
                >
                  Submit
                </Button>

              </div>

              

            ) : (
              <div className="flex flex-col content-center justify-center">
                <p className="text-center text-xl mx-auto">Join the club to arrange a booking!</p>
                <a href="/register" className="text-cyan-400 text-center pt-5">Register here</a>
              </div>
            )}
          </div>
          )}

          {success && (
            <div className="fixed bg-white rounded-md shadow-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-120 w-full h-auto z-60 p-5 pt-0">
              <IconButton className="absolute top-2 left-[90%]" onClick={closeSuccess} style={{ transform: 'none' }} >
                <CloseIcon />
              </IconButton>
              <div className="flex flex-row content-center justify-center">
                <CheckIcon className="text-green-500 text-6xl my-auto mr-5"/>
                <h1 className="text-center text-4xl font-bold my-auto">Booking success!</h1>
              </div>
            </div>
          )}
        </div>
      )}

      <Footer/>
    </main>
  )
}