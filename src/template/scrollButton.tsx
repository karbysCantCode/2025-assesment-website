"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IconButton from "@mui/material/IconButton";

export default function ScrollButton() {
  //visible state
  const [visible, setVisible] = useState(true);
  //helper function for scrolling to the bottom of the page
    const handleScroll = () => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });  
      setVisible(false);
    };

  useEffect(() => {
    const handleUserScroll = () => setVisible(false);
    window.addEventListener("scroll", handleUserScroll);
    return () => window.removeEventListener("scroll", handleUserScroll);
  }, []);
  if (!visible) return null;
  return (
    <div role="alert" className="md:block hidden fixed top-[90%] left-1/2 -translate-x-1/2 z-10">
      {/*arrow icon*/}
        <IconButton
            color="inherit"
            aria-label="scroll"
            onClick={handleScroll}
            className="!bg-white transition-transform duration-300 ease-in-out hover:-translate-y-2"
          >
            <ArrowDownwardIcon />
          </IconButton>
      </div>
  )
}