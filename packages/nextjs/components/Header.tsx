"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

/**
 * Site header
 */
export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <nav className="w-full h-full sticky top-0 z-50 py-[30px] flex justify-between items-center bg-[#ECF3FF]">
      <div className="w-[176px] h-[47px] flex justify-center items-end ml-[9rem]">
        <a href="https://adwumapa-nextjs.vercel.app/">
          <h1 className="font-oleo font-bold text-[31.33px] leading-[47px] text-[#2f66f6]">AdwumaPa</h1>
        </a>
      </div>

      <ul className="hidden lg:flex gap-6 w-[511px] h-[48px] mr-[10rem] items-center">
        <li>
          <a
            className="font-montserrat text-[16px] text-[#2f66f6] font-extrabold leading-[24px] text-center"
            href="#home"
          >
            Home
          </a>
        </li>
        <li>
          <a className="font-montserrat text-[16px] font-medium text-center text-[#696f8c]" href="#dashboard">
            Dashboard
          </a>
        </li>
        <li>
          <a className="font-montserrat text-nowrap text-[16px] font-medium text-center text-[#696f8c]" href="#browse">
            Browse Talents
          </a>
        </li>
        <li>
          <RainbowKitCustomConnectButton />
          <FaucetButton />
        </li>
      </ul>

      {/* Mobile Toggle Button */}
      <div className="lg:hidden flex justify-end items-center">
        <button onClick={toggleNavbar}>
          {mobileOpen ? (
            <X className="text-[#2f66f6] font-medium" size={30} />
          ) : (
            <Menu className="text-[#2f66f6] font-medium" size={30} />
          )}
        </button>
      </div>

      {/* Responsive state */}
      {mobileOpen && (
        <div className="fixed right-0 z-50 top-[4rem]  bg-[#ffffff] w-full h-full p-12 flex flex-col justify-center items-center lg:hidden transition-all duration-700 ease-in">
          <ul className="flex flex-col items-center gap-6 mt-[-22rem]">
            <li>
              <a
                className="font-montserrat text-[16px] text-[#2f66f6] font-extrabold leading-[24px] text-center"
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a className="font-montserrat text-[16px] font-medium text-center text-[#696f8c]" href="#dashboard">
                Dashboard
              </a>
            </li>
            <li>
              <a
                className="font-montserrat text-nowrap text-[16px] font-medium text-center text-[#696f8c]"
                href="#browse"
              >
                Browse Talents
              </a>
            </li>
            <li>
              <RainbowKitCustomConnectButton />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
