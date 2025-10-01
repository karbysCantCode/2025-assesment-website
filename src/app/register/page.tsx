"use client";
import * as React from "react";
import Navbar from "@/template/navbar";
import Footer from "@/template/footer";
import Image from "next/image";
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function Register() {
  return (
    <main className="bg-slate-200 relative z-1 min-h-screen">
      <Navbar />
      <div className="fixed top-14 w-full h-screen -z-10 overflow-hidden">
        <Image
          alt="View from Kakapo cabin."
          src="/kakapo/cabin_view.jpg"
          fill
          className="object-cover blur-[2px]"
        />
      </div>

      <section className="flex flex-col bg-slate-200 rounded-md mt-50 mb-67 shadow-xl p-5 pb-10 md:mx-auto mx-10 md:w-150 w-auto">
        <h1 className="font-semibold text-2xl">Create Your Account</h1>
        <p className="text-slate-500 px-5">Fill in the information below to become a Maunga Club member today!</p>
        <section className="flex flex-col gap-5">
            <section className="flex md:flex-row gap-5 justify-around px-5 pt-5 flex-col">
            <div className="flex flex-col">
              <p className="text-xl pl-2 ">First Name</p>
              <OutlinedInput placeholder="Micheal" className="h-10 !rounded-full"/>
            </div>
            <div className="flex flex-col">
              <p className="text-xl pl-2 ">Last Name</p>
              <OutlinedInput placeholder="Hardley" className="h-10 !rounded-full"/>
            </div>
          </section>

          <div className="flex flex-col px-9">
            <p className="text-xl pl-2 ">Enter Physical Address</p>
            <OutlinedInput placeholder="Eg: 123 Apple Street" className="h-10 !rounded-full"/>
          </div>
          <div className="flex flex-col px-9">
            <p className="text-xl pl-2">Upload Proof of Physical Address</p>
            <Button 
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon/>}
              className="h-10 !rounded-full !bg-stone-300 !text-black"
            >
              Upload Image
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => console.log(event.target.files)}
                multiple
                accept="image/*"
              />
            </Button>
          </div>
          <div className="flex flex-col px-9">
            <p className="text-xl pl-2 ">Upload Proof of ID</p>
            <Button 
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon/>}
              className="h-10 !rounded-full !bg-stone-300 !text-black"
            >
              Upload Image
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => console.log(event.target.files)}
                multiple
                accept="image/*"
              />
            </Button>
          </div>
        </section>

        <Button 
              component="label"
              variant="contained"
              className="h-15 !rounded-full !bg-stone-300 !text-black !mx-29 !mt-10"
            >
              Submit
            </Button>
        
      </section>

      <Footer/>
    </main>
  )
}