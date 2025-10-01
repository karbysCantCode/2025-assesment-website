"use client";
import * as React from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Cookies from "js-cookie";

import { siteConfig } from "@/app/config";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState<String | null>(null);

  React.useEffect(() => {
    setIsLoggedIn(Cookies.get("logged_in") === "true");
    if (isLoggedIn) {
      const usernameCookie = Cookies.get("username");
      if (usernameCookie) {
        setUsername(usernameCookie);
      }
    }
  })
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    const loggedInCookie = Cookies.get("logged_in");
    if (loggedInCookie) {
      Cookies.set("logged_in", "false")
    }
  }

  return (
    <nav className="w-full h-14 bg-mantle text-white flex top-0 left-0 fixed z-999">
      <div className="container flex justify-between items-center min-w-full">
        <div className="flex items-center justify-between w-140 divide-x-3 divide-white">
          <Image
          src={"/Maunga_Club_white.png"}
          alt="Maunga Club Logo"
          fill
          className="!relative !h-14 !w-auto"
          />



        {/* desktop page nav */}
        <ul className="hidden md:flex flex-row divide-x-2 divide-base w-full">
          {siteConfig.navbarElements.map((element) => (
            <li key={element.name}>
              <Button
                variant="text"
                href={element.href}
                sx={{
                  fontSize: "1.1rem",
                  fontFamily: ["Noto Sans", "sans-serif"],
                  color: "white",
                  textTransform: "none",
                  borderRadius: 0,
                  px: 2,
                  py: 1,
                  minWidth: 100,
                  ":hover": { bgcolor: "gray" },
                }}
              >
                {element.name}
              </Button>
              
            </li>
          ))}
        </ul>
        </div>

        <div className="md:flex hidden items-center pe-7">
          {isLoggedIn ? (
            <p>
              Greetings, {username}!
            </p>
          ) : 
          (<p></p>)
          }
          <div className="relative group">
            <IconButton
              color="inherit"
              aria-label="register"
              href="/register"
              sx={{ ":hover": { bgcolor: "gray" }}}
            >
              <PersonAddIcon />
            </IconButton>
            <span className="z-999 absolute top-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-xs px-2 py-1 rounded">
              Register now!
            </span>
          </div>
        </div>

        <div className="mr-4 md:hidden flex justify-between">
          {isLoggedIn ? (
            <IconButton
            color="inherit"
            aria-label="logout"
            onClick={handleLogout}
            sx={{ ":hover": { bgcolor: "gray" }}}
          >
            <LogoutIcon />
          </IconButton>
          ) : (
            <IconButton
            color="inherit"
            aria-label="register"
            href="/register"
            sx={{ ":hover": { bgcolor: "gray" }}}
          >
            <PersonAddIcon />
          </IconButton>
          )}


          <div className="md:hidden">
            <IconButton onClick={handleClick}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
          </div>
        </div>
      </div>


      <Menu 
        anchorEl={anchorEl} 
        open={open} 
        onClose={handleClose}>
        {siteConfig.navbarElements.map((element) => (
          <MenuItem
            key={element.name}
            component="a"
            href={element.href}
            onClick={handleClose}
          >
            {element.name}
          </MenuItem>
        ))}
      </Menu>
    </nav>
  );
}
