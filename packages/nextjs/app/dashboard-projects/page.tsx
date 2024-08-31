"use client";

import type { NextPage } from "next";

const DashboardProjects: NextPage = () => {
  return (
    <div className="bg-white">
      <div className=" text-[#2F66F6] text-left text-[24px] font-bold mx-6">Dashboard</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 mt-16 mx-4">
        <div className="bg-white border-[#D7D9E4] border-2 rounded-lg">
          <h3 className="text-[#0A0F29] text-xl  text-left font-bold mx-6">Projects</h3>
          <div className="flex flex-row gap-10 mx-6">
            <h3 className="text-[#0A0F29] text-lg  text-center font-normal  ">34</h3>
            <h3 className="text-[#0A0F29] text-lg text-center font-normal">3 vs last month</h3>
          </div>
        </div>
        <div className="bg-white border-[#D7D9E4] border-2 rounded-lg">
          <h3 className="text-[#0A0F29] text-xl  text-left font-bold mx-6">Total Milestone completed</h3>
          <div className="flex flex-row gap-10 mx-6">
            <h3 className="text-[#0A0F29] text-lg font-normal  text-center ">102</h3>
            <h3 className="text-[#0A0F29] text-lg font-normal text-center">3 vs last month</h3>
          </div>
        </div>
        <div className="bg-white border-[#D7D9E4] border-2 rounded-lg">
          <h3 className="text-[#0A0F29] text-xl  text-left font-bold mx-6">Total ratings</h3>
          <div className="flex flex-row gap-10 mx-6">
            <h3 className="text-[#0A0F29] text-lg font-normal text-center">34</h3>
            <h3 className="text-[#0A0F29] text-lg font-normal text-center">3 vs last month</h3>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-10 mx-10 mt-10">
        <a href="/">
          <h3 className="text-[#0A0F29] text-lg font-normal text-center">More Details</h3>
        </a>
        <a href="/dashboard-projects">
          <h3 className="text-[#0A0F29] text-lg font-normal text-center">All Projects</h3>
        </a>
        <a href="/dashboard-reviews">
          <h3 className="text-[#0A0F29] text-lg font-normal text-center">Reviews</h3>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 mt-16 mx-4 mb-4">
        <div className="bg-white border-[#D7D9E4] border-2 rounded-lg p-2">
          <p className="text-[#0A0F29] ">
            Pseudonymous Name: Kovács Lajos
            <br />
            Email: Kovács Lajos@gmail.com
            <br />
            Tags That Best Describe Skill: Smart Contracts, DeFi Development, NFT Integration
            <br />
            Skills and Talents: Smart Contracts, DeFi Development, NFT Integration
          </p>
        </div>
        <div className="bg-white border-[#D7D9E4] border-2 rounded-lg p-2">
          <p className="text-[#0A0F29] ">
            Level of Experience: Intermediate
            <br />
            Wallet:
            <br />
            Previous Projects: Ethereum-based DeFi Platform Description: Led the development of a DeFi platform that
            allows users to stake and earn rewards in ETH. Integrated multiple DeFi protocols for seamless interaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardProjects;
