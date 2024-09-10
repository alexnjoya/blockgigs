"use client";

import React from "react";

type Props = {
  isVisible: boolean;
  setShowModal: (arg: boolean) => void;
};

const Notification = ({ isVisible, setShowModal }: Props) => {
  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id == "wrapper") {
      return setShowModal(false);
    }
  };

  const notifications = [
    {
      title: "Smart Contract for Omni Bridge",
      description: "A Milestone was approved",
    },
    {
      title: "ChainLink Ventures",
      description: "A new contract awaits you",
    },
    {
      title: "ChainLink Ventures",
      description: "Some funds have been released into your wallet",
    },
  ];

  return (
    <div
      onClick={handleClose}
      id="wrapper"
      className="no-doc-scroll fixed w-full inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center"
    >
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-end h-screen items-center text-[#0A0F29]">
          <div className="bg-white w-[50%] h-screen overflow-y-scroll py-14 px-8 flex flex-col">
            <button
              onClick={() => setShowModal(false)}
              className="text-black  font-bold place-self-end -mt-5 mb-5 px-8"
            >
              X
            </button>

            <div className="flex flex-col text-[#0A0F29]">
              <h3 className="font-[600] text-[18px] mb-5">Notifications</h3>
              {notifications.map((notification, index) => (
                <div key={index} className=" flex justify-between items-center shadow-md rounded-md p-6">
                  <div>
                    <p className="font-[500]">Project Title</p>
                    <h2 className="font-[700]">{notification.title}</h2>
                  </div>

                  <p>{notification.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
