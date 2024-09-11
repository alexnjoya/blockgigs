"use client";

import { useState } from "react";
import Modal from "./modal/modal";
import { ethers } from "ethers";
import { NextPage } from "next";
import deployedContracts from "~~/contracts/deployedContracts";

const Page: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalFee, setTotalFee] = useState("");
  const [revisionPolicy, setRevisionPolicy] = useState("");

  const onSubmit = async () => {
    try {
      // Request account access if needed
      await window.ethereum.request({ method: "eth_requestAccounts" });

      // Connect to Ethereum provider
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      // Get contract details
      const networkId = 11155420;
      const contractAddress = deployedContracts[networkId].Adwumapa.address;
      const contractABI = deployedContracts[networkId].Adwumapa.abi;

      // Create contract instance
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      // Define project details
      const projectDetails = {
        amount: ethers.utils.parseEther(totalFee), // Convert fee to ETH
        title: projectTitle,
        description: projectDescription,
        startDate: Math.floor(new Date(startDate).getTime() / 1000), // Convert to timestamp
        endDate: Math.floor(new Date(endDate).getTime() / 1000), // Convert to timestamp
        revisionPolicy: revisionPolicy,
      };

      // Call createProject function
      const tx = await contract.createProject(
        projectDetails.amount,
        projectDetails.title,
        projectDetails.description,
        projectDetails.startDate,
        projectDetails.endDate,
        projectDetails.revisionPolicy,
        { value: projectDetails.amount }, // Send ETH with the transaction
      );

      // Wait for the transaction to be mined
      await tx.wait();
      console.log("Project created successfully");

      // Show modal after successful transaction
      setShowModal(true);
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <div className="pt-[50px] px-3 md:px-16 lg:px-24 w-full bg-white">
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
              value={projectTitle}
              onChange={e => setProjectTitle(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <label className="font-[500] pb-2">Project description</label>
            <input
              placeholder="Add description"
              className="w-full h-[48px] rounded-[8px] px-4 border shadow-sm"
              value={projectDescription}
              onChange={e => setProjectDescription(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <label className="font-[500] pb-2">Start date</label>
            <input
              type="date"
              placeholder="Add start date"
              className="w-full h-[48px] rounded-[8px] px-4 border shadow-sm"
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <label className="font-[500] pb-2">End date</label>
            <input
              type="date"
              placeholder="Add end date"
              className="w-full h-[48px] rounded-[8px] px-4 border shadow-sm"
              value={endDate}
              onChange={e => setEndDate(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <label className="font-[500] pb-2">Total Project fee</label>
            <input
              placeholder="Add total project fee"
              className="w-full h-[48px] rounded-[8px] px-4 border shadow-sm"
              value={totalFee}
              onChange={e => setTotalFee(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <label className="font-[500] pb-2">Revision Policy</label>
            <input
              placeholder="Add Revision Policy"
              className="w-full h-[48px] rounded-[8px] px-4 border shadow-sm"
              value={revisionPolicy}
              onChange={e => setRevisionPolicy(e.target.value)}
            />
          </div>

          <p>By signing this contract, both parties agree to the terms and conditions outlined above.</p>
          <div
            className="w-full h-[48px] mt-10 mb-14 px-6 py-3 bg-[#2F66F6] font-medium text-[14px] lg:text-[16px] text-nowrap text-[#ffffff] text-center cursor-pointer"
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
