"use client";

import Image from "next/image";
import Link from "next/link";
import Avatar1 from "../assets/Avartar1.png";
import type { NextPage } from "next";

const DashboardProjects: NextPage = () => {
  return (
    <div className="bg-[#FAFCFF] pt-10 lg:px-28">
      <h1 className=" text-[#2F66F6] text-left text-[36px] font-semibold">Dashboard</h1>
      <div className="flex space-x-4 items-center pt-8">
        <Image src={Avatar1} alt="image" />
        <h4 className="text-[18px] font-semibold">Kovács Lajos</h4>
        <Link href="/">
          <div className="w-full h-[43px] lg:h-[48px] px-6 py-3 gap-2 rounded-[4px] bg-[#2F66F6] font-montserrat font-medium text-[14px] lg:text-[16px] leading-6 text-nowrap text-[#ffffff] text-center">
            Edit details
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 mt-16">
        <div className="bg-white border-[#D7D9E4] border rounded-lg shadow-md p-6">
          <h3 className="text-[#0A0F29] text-[16px] font-[500] text-left">Total Projects</h3>
          <div className="flex flex-row justify-between items-center mt-4">
            <h3 className="text-[#0A0F29] text-[24px] text-center font-[600]">34</h3>
            <h3 className="text-[#0A0F29] text-[12px] text-center font-normal">3 vs last month</h3>
          </div>
        </div>
        <div className="bg-white border-[#D7D9E4] border rounded-lg shadow-md p-6">
          <h3 className="text-[#0A0F29] text-[16px] font-[500] text-left">Total Milestone completed</h3>
          <div className="flex flex-row justify-between items-center mt-4">
            <h3 className="text-[#0A0F29] text-[24px] text-center font-[600]">102</h3>
            <h3 className="text-[#0A0F29] text-[12px] text-center font-normal">3 vs last month</h3>
          </div>
        </div>
        <div className="bg-white border-[#D7D9E4] border rounded-lg shadow-md p-6">
          <h3 className="text-[#0A0F29] text-[16px] font-[500] text-left">Total ratings</h3>
          <div className="flex flex-row justify-between items-center mt-4">
            <h3 className="text-[#0A0F29] text-[24px] text-center font-[600]">102</h3>
            <h3 className="text-[#0A0F29] text-[12px] text-center font-normal">3 vs last month</h3>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-10 mt-12">
        <a href="/">
          <h3 className="text-[#696F8C] text-[24px] font-[600] text-center">More Details</h3>
        </a>
        <a href="/dashboard-projects">
          <h3 className="text-[#0A0F29] text-[24px] font-[600] text-center">All Projects</h3>
        </a>
        <a href="/dashboard-reviews">
          <h3 className="text-[#696F8C] text-[24px] font-[600] text-center">Reviews</h3>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-3 mt-6 mb-10">
        <div className="bg-white rounded-lg shadow-md px-5 text-[#0A0F29] text-[18px]">
          <p className="text-[#0A0F29] text-[18px] text-justify">
            Kovacs exceeded our expectations with the development of our decentralized voting system. He has a deep
            understanding of blockchain development
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md px-5 pb-4 text-[#0A0F29] text-[18px]">
          <p className="text-[#0A0F29] text-[18px] text-justify">
            Working with Kovacs was a fantastic experience. He successfully built a cross-chain token swap platform that
            is both secured and user-friendly
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md px-5 pb-4 text-[#0A0F29] text-[18px]">
          <p className="text-[#0A0F29] text-[18px] text-justify">
            Kovacs played a crucial role in developing a DAO governance platform. He successfully built a cross-chain
            His attention to details amd innovative solutions helped us to create a robust and transparent platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardProjects;
