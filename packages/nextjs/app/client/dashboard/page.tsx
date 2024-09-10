"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Avatar1 from "../../assets/Avartar1.png";
import RightModal from "./_components/right-modal";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./_components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./_components/ui/tabs";
import type { NextPage } from "next";

const Dashboard: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 mt-16">
        <div className="bg-white border-[#D7D9E4] border rounded-lg shadow-md p-6">
          <p>
            <span className="font-[600] text-[#0A0F29] ">Pseudonymous Name:</span> Jacob Jones
          </p>
          <p>
            <span className="font-[600] text-[#0A0F29] ">Email:</span> Jacob.Jones@gmail.com{" "}
          </p>
        </div>
      </div>

      <Tabs defaultValue="projects" className="mt-12 mb-10">
        <TabsList>
          <TabsTrigger value="projects" className=" text-[24px] font-[600] text-center cursor-text">
            All Projects
          </TabsTrigger>
        </TabsList>
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
                    <h3 key={project.title} className="text-[16px] font-[700] text-[#0A0F29] mb-6">
                      {project.title}
                    </h3>
                  ))}
                </TableCell>
                <TableCell>
                  {projects.map(project => (
                    <h3 key={project.title} className="font-[500] text-[#0A0F29] mb-6 text-[16px]">
                      {project.milestone}
                    </h3>
                  ))}
                </TableCell>
                <TableCell>
                  {projects.map(project => (
                    <h3 key={project.title} className="font-[500] text-[#0A0F29] mb-6 text-[16px]">
                      {project.client}
                    </h3>
                  ))}
                </TableCell>
                <TableCell>
                  {projects.map(project => (
                    <h3
                      key={project.title}
                      onClick={() => setShowModal(true)}
                      className="font-[700] text-[#2F66F6] mb-6 text-[16px] cursor-pointer"
                    >
                      View details
                    </h3>
                  ))}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>

      <RightModal isVisible={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Dashboard;
