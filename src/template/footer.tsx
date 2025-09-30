import React from "react";

const Footer = () => {
  return (
    <footer className="bg-mantle text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-5">
          Contact Us: maungaclub@maungaclub.maungaclub
        </p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Maunga Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
