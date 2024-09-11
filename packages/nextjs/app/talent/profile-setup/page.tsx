"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Line2 from "./assets/line2.svg";
import Line from "./assets/line.svg";
import Modal from "./modal/modal";
import { Chain, EnsPlugin } from "@namespace-ens/web3-plugin-ens";
import { NextPage } from "next";
import Web3 from "web3";

// Function to resolve ENS names to addresses
const resolveEns = async (name: any) => {
  let address = "";
  if (name.endsWith(".eth")) {
    const web3 = new Web3();
    const ensPlugin = new EnsPlugin(Chain.Mainnet);
    web3.registerPlugin(ensPlugin);
    address = await web3.ens.getAddress(name);
    if (address === web3.utils.padLeft(0, 40)) {
      address = "Invalid ENS name";
    }
    console.log(address);
  }
  return address;
};

const Page: NextPage = () => {
  const [next, setNext] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [walletInput, setWalletInput] = useState("");
  const [resolvedAddress, setResolvedAddress] = useState("");

  useEffect(() => {
    const resolveAddress = async () => {
      if (walletInput.endsWith(".eth")) {
        const address = await resolveEns(walletInput);
        setResolvedAddress(address);
      } else {
        setResolvedAddress(walletInput);
      }
    };
    resolveAddress();
  }, [walletInput]);

  const onSubmit = () => {
    localStorage.setItem("signedIn", "true");
    localStorage.setItem("walletAddress", resolvedAddress);
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

      {!next && (
        <form className="flex justify-center items-center">
          <div className="max-w-[550px]">
            <div>
              <p className="text-[18px]">Step 1 of 2</p>
              <Image src={Line} alt="line" />
            </div>
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
            <div className="mt-5">
              <label className="font-[500] pb-2">Work history</label>
              <input placeholder="Your work history" className="w-full h-[48px] rounded-[8px] px-4 border shadow-sm" />
            </div>

            <button
              type="submit"
              className="w-full h-[48px] mt-10 mb-14 px-6 py-3  bg-[#2F66F6] font-medium text-[14px] lg:text-[16px] text-nowrap text-[#ffffff] text-center cursor-pointer"
              onClick={() => setNext(true)}
            >
              Continue
            </button>
          </div>
        </form>
      )}

      {next && (
        <div className="flex justify-center items-center">
          <div className="max-w-[430px]">
            <div>
              <p className="text-[18px]">Step 2 of 2</p>
              <Image src={Line2} alt="line" />
            </div>
            <div className="mt-7">
              <label className="font-[500] pb-2">Previous projects and short description</label>
              <input
                placeholder="Add previous project and a short description"
                className="w-full h-[48px] rounded-[8px] px-4 border shadow-sm"
              />
            </div>
            <div className="mt-5">
              <label className="font-[500] pb-2">Add 3 tags that best describe your skill</label>
              <input
                placeholder="e.g smart contract, design, web development"
                className="w-full h-[48px] rounded-[8px] px-4 border shadow-sm"
              />
            </div>
            <div className="relative mt-5">
              <label className="font-[500] pb-2">Skills and talents</label>
              <input
                className="block w-full p-4 ps-4 text-sm bg-white text-gray-900 border border-gray-300 rounded-lg"
                placeholder="Click on the drop down to select an option"
              />
            </div>
            <div className="mt-5">
              <label className="font-[500] pb-2">Level of experience</label>
              <input
                placeholder="Click on the drop down to select an option"
                className="w-full h-[48px] rounded-[8px] px-4 border shadow-sm"
              />
            </div>
            <div className="mt-5">
              <label className="font-[500] pb-2">Rate per hour in cryptocurrency</label>
              <input
                placeholder="How much you charge per hour"
                className="w-full h-[48px] rounded-[8px] px-4 border shadow-sm"
              />
            </div>
            <div className="mt-5">
              <label className="font-[500] pb-2">Add preferred wallets</label>
              <input
                placeholder="Add your preferred wallet address or ENS name"
                className="w-full h-[48px] rounded-[8px] px-4 border shadow-sm"
                value={walletInput}
                onChange={e => setWalletInput(e.target.value)}
              />
              {walletInput && <p className="text-sm text-gray-600 mt-2">Resolved Address: {resolvedAddress}</p>}
            </div>
            <div className="mt-5">
              <label className="font-[500] pb-2">Cryptocurrency time</label>
              <input
                placeholder="Add your preferred cryptocurrency type"
                className="w-full h-[48px] rounded-[8px] px-4 border shadow-sm"
              />
            </div>
            <div
              className="w-full h-[48px] mt-10 mb-14 px-6 py-3  bg-[#2F66F6] font-medium text-[14px] lg:text-[16px] text-nowrap text-[#ffffff] text-center cursor-pointer"
              onClick={onSubmit}
            >
              Set up account
            </div>
          </div>
        </div>
      )}

      <Modal isVisible={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Page;
