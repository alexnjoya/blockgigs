"use client";

import Featured from "./_components/featured";
import Hero from "./_components/hero";
import Services from "./_components/services";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-white">
      <Hero />
      <div className="bg-[#2F66F6] text-white text-center text-[24px] font-[600] h-[88px] flex flex-col items-center justify-center">
        <h3>Connecting Talent, Transcending Boundaries</h3>
      </div>

      <Services />
      <Featured />
    </div>
  );
};

export default Home;
