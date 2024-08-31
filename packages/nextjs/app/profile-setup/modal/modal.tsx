"use client";

import React from "react";
import Link from "next/link";

type Props = {
  isVisible: boolean;
  setShowModal: (arg: boolean) => void;
};

const Modal = ({ isVisible, setShowModal }: Props) => {
  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id == "wrapper") {
      return setShowModal(false);
    }
  };

  return (
    <div
      onClick={handleClose}
      id="wrapper"
      className="fixed w-full inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-50 flex justify-center items-center"
    >
      <div className="w-full flex flex-col">
        <button
          onClick={() => setShowModal(false)}
          className="text-white absolute right-14 top-10 font-bold place-self-end"
        >
          X
        </button>
        <div className="w-full flex justify-center items-center">
          <div className="bg-white w-[747px] flex justify-center items-center">
            <div className="max-w-[451px] py-14">
              <h3 className="text-[24px] font-semibold text-center">You have successfully created your profile</h3>
              <Link href="/dashboard">
                <div className="w-full h-[24px] lg:h-[48px] mt-10 px-6 py-3  bg-[#2F66F6] font-medium text-[14px] lg:text-[16px] text-nowrap text-[#ffffff] text-center cursor-pointer">
                  View profile
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
