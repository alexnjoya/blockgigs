"use client";

import React from "react";
import Image from "next/image";
import Avatar1 from "../../../assets/Avartar1.png";

type Props = {
  isVisible: boolean;
  setShowModal: (arg: boolean) => void;
};

const RightModal = ({ isVisible, setShowModal }: Props) => {
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
      className="no-doc-scroll fixed w-full inset-0 bg-black bg-opacity-30 z-50 md:flex justify-center items-center"
    >
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-end h-screen items-center text-[#0A0F29]">
          <div className="bg-white w-full md:w-[50%] h-screen overflow-y-scroll py-14 px-8 flex flex-col">
            <button
              onClick={() => setShowModal(false)}
              className="text-black  font-bold place-self-end -mt-5 mb-5 px-8"
            >
              X
            </button>
            <div className="flex justify-between items-center">
              <div className="flex space-x-4 items-center">
                <Image src={Avatar1} alt="image" />
                <h4 className="text-[18px] font-semibold">Kovács Lajos</h4>
              </div>
              <div>
                <div className="w-full h-[43px] lg:h-[48px] px-6 py-3 gap-2 rounded-[4px] bg-[#2F66F6] font-montserrat font-medium text-[14px] lg:text-[16px] leading-6 text-nowrap text-[#ffffff] text-center">
                  Mark as complete
                </div>
              </div>
            </div>

            <div className="flex justify-between shadow-md mt-8 text-[#0A0F29] p-4 rounded-md">
              <div>
                <p className="font-[500]">Project Title</p>
                <p className="font-[700]">Smart Contract for Omni Bridge</p>
              </div>
              <div>
                <p className="font-[500]">Milestone completed</p>
                <p>2/3</p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-[#696F8C] font-[600] text-[18px]">Project Details</h4>
              <div className="flex justify-between">
                <p className="w-[30%] text-nowrap pr-10">Project Description</p>
                <p className="text-black font-[500]">
                  Develop a smart contract for a decentralized finance application, including testing and deployment on
                  the Ethereum blockchain.
                </p>
              </div>

              <div className="flex">
                <p className="text-nowrap w-[30%] pr-10">Milestones </p>
                <div className="flex flex-col -space-y-3">
                  <div className="flex space-x-10 w-full">
                    <p className="text-black font-[500] w-full">Complete architecture design</p>
                    <p className="text-[#539E47] place-self-end">Complete</p>
                  </div>

                  <div className="flex space-x-10">
                    <p className="text-black font-[500] w-full">Code completion and initial testing</p>
                    <p className="text-[#539E47] place-self-end">Complete</p>
                  </div>

                  <div className="flex space-x-10">
                    <p className="text-black font-[500] w-full">Code completion and initial testing</p>
                    <p className="text-[#DF1B1B] place-self-end">Pending</p>
                  </div>
                </div>
              </div>

              <div className="flex">
                <p className="w-[30%] text-nowrap pr-10">Start date</p>
                <p className="text-black font-[500]">27/08/2024</p>
              </div>

              <div className="flex">
                <p className="w-[30%] text-nowrap pr-10">End date</p>
                <p className="text-black font-[500]">16/12/2024</p>
              </div>

              <div className="flex">
                <p className="w-[30%] text-nowrap pr-10">Milestone deadlines</p>
                <div>
                  <p className="text-black font-[500]">16/10/2024</p>
                  <p className="text-black font-[500]">16/11/2024</p>
                  <p className="text-black font-[500]">16/12/2024</p>
                </div>
              </div>

              <div className="flex">
                <p className="w-[30%] text-nowrap pr-10">Project Fee</p>
                <p className="text-black font-[500]">1.5 ETH</p>
              </div>

              <div className="flex justify-between">
                <p className="w-[30%] text-nowrap pr-10">Revision Policy</p>
                <p className="text-black font-[500]">
                  Up to 3 revisions included; additional revisions will incur extra costs.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-[#696F8C] font-[600] text-[18px]">Submit Milestones</h4>

              <div className="flex">
                <p className="text-nowrap w-[30%] pr-10">Milestones </p>
                <div className="flex flex-col -space-y-3">
                  <div className="flex space-x-10 w-full  items-center">
                    <p className="text-black font-[500] w-full">Complete architecture design</p>
                    <div>
                      <div className="w-full px-5 py-2 gap-2 rounded-[4px] bg-[#2F66F6] font-montserrat font-medium text-[14px] lg:text-[16px] leading-6 text-nowrap text-[#ffffff] text-center">
                        Submit
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-10 items-center">
                    <p className="text-black font-[500] w-full">Code completion and initial testing</p>
                    <div>
                      <div className="w-full px-5 py-2 gap-2 rounded-[4px] bg-[#2F66F6] font-montserrat font-medium text-[14px] lg:text-[16px] leading-6 text-nowrap text-[#ffffff] text-center">
                        Submit
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-10 items-center">
                    <p className="text-black font-[500] w-full">Code completion and initial testing</p>
                    <div>
                      <div className="w-full px-5 py-2 gap-2 rounded-[4px] bg-[#2F66F6] font-montserrat font-medium text-[14px] lg:text-[16px] leading-6 text-nowrap text-[#ffffff] text-center">
                        Submit
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightModal;
