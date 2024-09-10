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
    <div className="pt-[50px] md:px-16 lg:px-24 w-full bg-white">
      <div className="flex flex-col justify-center items-center ">
        <div className="text-center max-w-[448px]">
          <h2 className="text-[36px] font-[600] text-[#0A0F29]">Project Contract</h2>
          <p className="text-[18px] font-normal">Specify your project</p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="max-w-[430px]">
          <div className="mt-7">
            <label className="font-[500] pb-2">Project title</label>
            <input
              placeholder="Add your project title"
              className="w-full h-[48px] rounded-[8px] px-4 border shadow-sm"
            />
          </div>
          <div className="mt-5">
            <label className="font-[500] pb-2">Project description</label>
            <input placeholder="Add  description" className="w-full h-[48px] rounded-[8px] px-4 border shadow-sm" />
          </div>
          <div className="relative mt-5">
            <label className="font-[500] pb-2">Milestone (Add 3 milestones)</label>
            <input
              className="block w-full p-4 ps-4 text-sm bg-white text-gray-900 border border-gray-300 rounded-lg"
              placeholder="Add  milestone"
            />
          </div>
          <div className="mt-5">
            <label className="font-[500] pb-2">Milestone deadline</label>
            <input
              placeholder="Add 3 milestone deadlines"
              className="w-full h-[48px] rounded-[8px] px-4 border shadow-sm"
            />
          </div>
          <div className="mt-5">
            <label className="font-[500] pb-2">Start date</label>
            <input placeholder="Add start date" className="w-full h-[48px] rounded-[8px] px-4 border shadow-sm" />
          </div>
          <div className="mt-5">
            <label className="font-[500] pb-2">End date</label>
            <input placeholder="Add end date" className="w-full h-[48px] rounded-[8px] px-4 border shadow-sm" />
          </div>
          <div className="mt-5">
            <label className="font-[500] pb-2">Total Project fee</label>
            <input
              placeholder="Add total project fee"
              className="w-full h-[48px] rounded-[8px] px-4 border shadow-sm"
            />
          </div>
          <div className="mt-5">
            <label className="font-[500] pb-2">Revision Policy</label>
            <input placeholder="Add Revision Policy" className="w-full h-[48px] rounded-[8px] px-4 border shadow-sm" />
          </div>

          <p>By signing this contract, both parties agree to the terms and conditions outlined above.</p>
          <div
            className="w-full h-[24px] lg:h-[48px] mt-10 mb-14 px-6 py-3  bg-[#2F66F6] font-medium text-[14px] lg:text-[16px] text-nowrap text-[#ffffff] text-center cursor-pointer"
            onClick={onSubmit}
          >
            Continue
          </div>
        </div>
      </div>

      <Modal isVisible={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Page;
