import React from "react";
import { Twitter, Instagram, Facebook } from "lucide-react";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="bg-[#0c0e10] overflow-hidden text-[#ccc] mt-20 text-sm">
      <div className="py-16 relative container mx-auto flex flex-wrap justify-around">
        <div className="footer-gradient" />
        <div className="flex flex-col  justify-center items-center mx-4 mb-4">
          <Logo width={92} height={40} />
          <address className="text-sm not-italic mt-3">
            Butwal-11, Nepal
          </address>
        </div>

        <div className="flex flex-col items-start mx-4 mb-4">
          <h3 className="text-base font-semibold mb-4 text-gray-300 ">
            Our Services
          </h3>

          <ul className="flex flex-col gap-3">
            <li>House Renting</li>
            <li>Room Renting</li>
            <li>Apartment Renting</li>
          </ul>
        </div>

        <div className="flex flex-col items-start mx-4 mb-4">
          <h3 className="text-base font-semibold mb-4 text-gray-300 ">
            Locations
          </h3>
          <ul className="flex flex-col gap-3">
            <li>Pokhara</li>
            <li>Butwal</li>
            <li>Kathmandu</li>
          </ul>
        </div>

        <div className="flex flex-col items-start mx-4 mb-4">
          <h3 className="text-base font-semibold mb-4 text-gray-300 ">
            Follow us
          </h3>

          <div className="mb-3 flex gap-3 items-center">
            <Facebook className="h-4 w-4 text-green-500" />
            <a href="#">Facebook</a>
          </div>
          <div className="mb-3 flex gap-3 items-center">
            <Instagram className="h-4 w-4 text-green-500" />
            <a href="#">Instagram</a>
          </div>
          <div className="mb-3 flex gap-3 items-center">
            <Twitter className="h-4 w-4 text-green-500" />
            <a href="#">X (Twitter)</a>
          </div>
        </div>

        <div className="flex flex-col items-start mx-4 mb-4">
          <h3 className="text-base font-semibold mb-4 text-gray-300 ">
            Contact us
          </h3>
          <p>Email : dera@gmail.com</p>
          <p className="mt-3">Mobile no : 9803483974</p>
        </div>
      </div>

      <div className="h-[0.6px] w-full bg-primary/50" />

      <div className="container mx-auto py-2 text-xs flex justify-between items-center">
        <div>&copy; 2024 All Rights Reserved</div>
        <div className="flex items-center justify-between gap-4">
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Site Map</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
