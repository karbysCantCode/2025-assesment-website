"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { siteConfig } from "../../public/config";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="w-full h-20 bg-black text-white flex fixed">
      <div className="container flex justify-between items-center min-w-full">
        <div className="flex items-center justify-between w-130">
          <img
          src="/Maunga_Club_white.png"
          alt="Maunga Club Logo"
          className="h-16 w-auto"
        />

        <ul className="hidden md:flex flex-row divide-x-2 w-full">
          {siteConfig.navbarElements.map((element) => (
            <li key={element.name}>
              <Button
                variant="text"
                href={element.link}
                sx={{
                  fontSize: "1.1rem",
                  fontFamily: ["Noto Sans", "sans-serif"],
                  color: "white",
                  textTransform: "none",
                  borderRadius: 0,
                  px: 2,
                  ":hover": { bgcolor: "gray" },
                }}
              >
                {element.name}
              </Button>
              
            </li>
          ))}
        </ul>
        </div>

        <div className="md:flex hidden items-center">
          <Button
            variant="text"
        </div>

        <div className="mr-4 md:hidden">
          <IconButton
            color="inherit"
            aria-label="login"
            href="/login"
            sx={{ ":hover": { bgcolor: "gray" }}}
          >
            <PersonAddIcon />
          </IconButton>


          <div className="md:hidden">
            <IconButton onClick={handleClick}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
          </div>
        </div>
      </div>


      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {siteConfig.navbarElements.map((element) => (
          <MenuItem
            key={element.name}
            component="a"
            href={element.link}
            onClick={handleClose}
          >
            {element.name}
          </MenuItem>
        ))}
      </Menu>
    </nav>
  );
}
