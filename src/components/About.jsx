import React from "react";

const About = () => {
  return (
    <div className="w-full py-[5vw] px-[4vw] bg-[#CDEA68] rounded-t-3xl text-zinc-800">
      <h1 className="font-['Neue_Montreal'] text-[3.25vw] leading-[3.5vw] text-justify pr-[10vw] tracking-tight">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full border-t-[1px] border-[#a1b562] mt-20">
        <div className="w-1/2">
          <h1 className="text-6xl pt-10 " >our approach</h1>
          <button className="px-0 py-6 bg-zinc-900 rounded-full text-zinc-100">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
