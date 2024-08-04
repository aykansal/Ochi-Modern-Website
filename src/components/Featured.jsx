import React, { useState } from "react";
import { motion } from "framer-motion";

const Featured = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: "FYDE",
      name: "FYDE",
      imgSrc:
        "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png",
    },
    {
      id: "VISE",
      name: "VISE",
      imgSrc:
        "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg",
    },
  ];

  return (
    <div className="font-['Neue_Montreal'] py-20 w-full">
      <div className="pb-12 w-full border-b-[1px] border-zinc-100 dark:border-zinc-500">
        <h1 className="px-16 text-5xl tracking-wide">Featured projects</h1>
      </div>
      <div className="cards w-full px-16 mt-16 flex gap-10">
        {projects.map((project) => (
          <div key={project.id} className="w-full md:w-1/2 ">
            <div className="flex gap-3 items-center mb-4">
              <div className="h-2 w-2 bg-zinc-900 dark:bg-zinc-100 rounded-full" />
              <span className="text-sm">{project.name}</span>
            </div>
            <div
              className="cardContainer relative w-full h-[75vh]"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {hoveredCard === project.id && (
                <h1
                  className={`absolute text-[#CDEA68] tracking-wide top-1/2 text-[110px] overflow-hidden flex font1 z-[9] -mt-10 leading-none 
                    ${
                      project.id === "FYDE"
                        ? "left-full -translate-x-1/2"
                        : "right-full translate-x-1/4"
                    } 
                    `}
                >
                  {project.name.split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      className="inline-block"
                      initial={{ translateY: "100%" }}
                      animate={{ translateY: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.05,
                        ease: "easeInOut",
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </h1>
              )}
              <motion.div
                whileHover={{ scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="card rounded-xl overflow-hidden"
              >
                <img
                  className={`w-full h-full object-cover transition-all duration-[600ms] ease-in-out ${
                    hoveredCard === project.id ? "scale-[1.1]" : "scale-[1]"
                  }`}
                  src={project.imgSrc}
                  alt={project.name}
                />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
