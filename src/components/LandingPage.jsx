import { motion } from "framer-motion";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const LandingPage = () => {
  const [divHover, setDivHover] = React.useState(false);

  return (
    <div
      data-scroll
      data-scoll-section
      data-scroll-speed="-.3"
      className="dark:bg-zinc-900 h-screen w-full pt-px"
    >
      <div className="textstructure mt-32 px-16">
        {["We Create", "Eye-opening", "presentations"].map((item, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex items-baseline">
              {index === 1 && (
                <motion.img
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.6, 0, 0.24, 1], duration: 1 }}
                  className="mr-2 w-[8.5vw] h-[5.5vw] rounded-md shadow-md shadow-teal-600"
                  src="https://t3.ftcdn.net/jpg/02/70/53/78/360_F_270537879_zZSYyCuhADNfqtS9jXo1XbDRPhr5rDsh.jpg"
                />
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
          <div className="start flex gap-3">
            <div
              className="cursor-pointer text-sm px-5 py-1 font-semibold uppercase border border-[1px] rounded-full hover:bg-slate-200 hover:text-slate-900  transition-all duration-100 ease-in-out"
              onMouseEnter={() => setDivHover(true)}
              onMouseLeave={() => setDivHover(false)}
            >
              Start The Project
            </div>
            <div
              onMouseEnter={() => setDivHover(true)}
              onMouseLeave={() => setDivHover(false)}
              className={`cursor-pointer rounded-full border border-[1px] h-8 w-8 flex justify-center items-center justify-center transition-all duration-100 ease-in-out ${
                divHover && "scale-[1.3]"
              } `}
            >
              <MdArrowOutward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
