import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div
    data-scroll
    data-scroll-section
    data-scroll-speed="0.1"
    className="w-full bg-[#004D43] rounded-t-3xl py-20">
      <div className="border-y-2 border-zinc-400/80 flex whitespace-nowrap overflow-hidden">
        {[1, 2].map((item) => (
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 4.5 }}
            key={item}
            className="uppercase text-[25vw] leading-none -my-[2.8vw] font1 font-semibold pr-10 "
          >
            we are ochi
          </motion.h1>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
