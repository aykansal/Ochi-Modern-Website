import React from "react";
import { MdArrowOutward } from "react-icons/md";

const LandingPage = () => {
  return (
    <div className="dark:bg-zinc-900 h-screen w-full pt-px">
      <div className="textstructure mt-32 px-16">
        {["We Create", "Eye-opening", "presentations"].map((item, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex items-baseline">
              {index === 1 && (
                <div className="mr-3 w-[8.5vw] h-[5.5vw] bg-green-400 rounded-md " />
              )}
              <h1 className="font1 text-[8.75vw] leading-[7.45vw] flex items-center font-medium uppercase">
                {item}
              </h1>
            </div>
          </div>
        ))}
        <div className="border-t-[1px] text-sm border-zinc-400/50 mt-20 flex justify-between items-center py-3">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((item, index) => {
            return (
              <p
                key={index}
                className="text-md font-light tracking-light leading-none"
              >
                {item}
              </p>
            );
          })}
          <div className="start flex gap-1">
            <div className="text-sm px-5 py-1 font-semibold uppercase border border-[1px] rounded-full">
              Start The Project
            </div>
            <div className="rounded-full border border-[1px] h-8 w-8 flex justify-center items-center justify-center">
              <MdArrowOutward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;