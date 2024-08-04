import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      className="font-['Neue_Montreal'] w-full py-[5vw] px-[4vw] bg-[#CDEA68] rounded-t-3xl text-zinc-800"
    >
      <h1 className="text-[3.25vw] leading-[3.5vw] text-justify pr-[10vw] tracking-tight">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full border-t-[1px] border-[#a1b562] mt-20 pt-10 flex gap-10 ">
        <div className="w-1/2">
          <h1 className="text-6xl capitalize">our approach</h1>
          <button className="px-8 py-[17.5px] mt-10 flex items-center gap-x-9 bg-zinc-900 rounded-full text-zinc-100 uppercase text-sm leading-none">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full" />
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-green-900/20 overflow-hidden ">
          <img src="/aboutImage.webp" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default About;
