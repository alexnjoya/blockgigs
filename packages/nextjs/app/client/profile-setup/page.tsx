"use client";

import { useState } from "react";
import Modal from "./modal/modal";
import { NextPage } from "next";

const Page: NextPage = () => {
  const [showModal, setShowModal] = useState(false);

  const onSubmit = () => {
    localStorage.setItem("signedIn", "true");
    setShowModal(true);
  };
  return (
    <div className="pt-[50px] px-3 md:px-16 lg:px-24 w-full bg-white">
      <div className="flex flex-col justify-center items-center ">
        <div className="text-center max-w-[448px]">
          <h2 className="text-[36px] font-[600] text-[#0A0F29]">Set up your Profile</h2>
          <p className="text-[18px] font-normal">Here you can set up and create your profile</p>
        </div>
      </div>

      <form className="flex justify-center items-center">
        <div className="max-w-[550px]">
          <div className="mt-7">
            <label className="font-[500] pb-2">Pseudonymous name</label>
            <input
              placeholder="Add a pseudonymous name"
              className="w-full h-[48px] rounded-[8px] px-4 border shadow-sm"
              required
            />
          </div>
          <div className="mt-5">
            <label className="font-[500] pb-2">Email</label>
            <input placeholder="Add your email" className="w-full h-[48px] rounded-[8px] px-4 border shadow-sm" />
          </div>
          <div className="relative mt-5">
            <label className="font-[500] pb-2">Add avatar</label>
            <input
              type="file"
              id="default-search"
              className="block w-full p-4 ps-4 text-sm bg-white text-gray-900 border border-gray-300 rounded-lg"
              placeholder="Add your avatar"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full h-[48px] mt-10 mb-14 px-6 py-3  bg-[#2F66F6] font-medium text-[14px] lg:text-[16px] text-nowrap text-[#ffffff] text-center cursor-pointer"
            onClick={onSubmit}
          >
            Continue
          </button>
        </div>
      </form>

      <Modal isVisible={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Page;
