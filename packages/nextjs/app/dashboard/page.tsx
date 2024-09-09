"use client";

import Image from "next/image";
import Link from "next/link";
import Avatar1 from "../assets/Avartar1.png";
import Star from "../assets/stars.png";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./_components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./_components/ui/tabs";
import type { NextPage } from "next";

const Dashboard: NextPage = () => {
  const projects = [
    {
      title: "Smart Contract for Omni Bridge",
      milestone: "2/3",
      client: "Jacob Jones",
    },
    {
      title: "Decentralized Voting System",
      milestone: "1/3",
      client: "Votereum Inc",
    },
    {
      title: "(DAO) Governance Platform",
      milestone: "1/3",
      client: "DAO Innovators",
    },
    {
      title: "ChainLink Ventures",
      milestone: "3/3",
      client: "Binance Labs",
    },
  ];
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
            <div>
              <Image src={Star} alt="stars" />
            </div>
            <h3 className="text-[#0A0F29] text-[12px] text-center font-normal">3 vs last month</h3>
          </div>
        </div>
      </div>

      <Tabs defaultValue="details" className="mt-12 mb-10">
        <TabsList>
          <TabsTrigger value="details" className="text-[24px] font-[600] text-center">
            More Details
          </TabsTrigger>
          <TabsTrigger value="projects" className=" text-[24px] font-[600] text-center">
            All Projects
          </TabsTrigger>
          <TabsTrigger value="reviews" className=" text-[24px] font-[600] text-center">
            Reviews
          </TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 mt-6">
            <div className="bg-white rounded-lg shadow-md px-5 text-[#0A0F29] text-[18px]">
              <p className="text-[#0A0F29] text-[18px]">
                <span className="font-[600]">Pseudonymous Name:</span> Kovács Lajos
              </p>
              <p>
                <span className="font-[600]">Email:</span> Kovács Lajos@gmail.com
              </p>
              <p>
                <span className="font-[600]">Tags That Best Describe Skill:</span> Smart Contracts, DeFi Development,
                NFT Integration
              </p>
              <p>
                <span className="font-[600]">Skills and Talents:</span> Smart Contracts, DeFi Development, NFT
                Integration
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md px-5 pb-4 text-[#0A0F29] text-[18px]">
              <p className="text-[#0A0F29] text-[18px]">
                <span className="font-[600]">Level of Experience:</span> Intermediate
              </p>
              <p>
                <span className="font-[600]">Wallet:</span> 0x1622jduwcg7744894ihbjc4
              </p>
              <p>
                <span className="font-[600]">Previous Projects:</span> Ethereum-based DeFi Platform
              </p>
              <p>
                <span className="font-[600]">Description:</span> Led the development of a DeFi platform that allows
                users to stake and earn rewards in ETH. Integrated multiple DeFi protocols for seamless interaction.
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="projects">
          <Table className="bg-white rounded-lg shadow-lg px-5">
            <TableHeader>
              <TableRow className="text-[16px] font-[500] text-[#696F8C]">
                <TableHead className="">Project Title</TableHead>
                <TableHead>Milestones completed</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Detail</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  {projects.map(project => (
                    <h3 key={project.title}>{project.title}</h3>
                  ))}
                </TableCell>
                <TableCell>
                  {projects.map(project => (
                    <h3 key={project.title}>{project.milestone}</h3>
                  ))}
                </TableCell>
                <TableCell>
                  {projects.map(project => (
                    <h3 key={project.title}>{project.client}</h3>
                  ))}
                </TableCell>
                <TableCell>
                  {projects.map(project => (
                    <h3 key={project.title}>View details</h3>
                  ))}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="reviews">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
