import React from "react";

const Cards = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.1"
      className="w-full h-screen bg-zinc-100 flex justify-center pt-20 px-16 gap-4"
    >
      <div className="cardContainer h-[55vh] w-1/2">
        <div className="card relative rounded-xl w-full h-full justify-center bg-[#004D43] flex items-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          />
          <button className="absolute px-5 py-1 border-2 left-10 rounded-full bottom-10">
            &copy; 2019-2024
          </button>
        </div>
      </div>
      <div className="cardContainer w-1/2 flex gap-5 h-[55vh]">
        <div className="card relative flex items-center justify-center w-full h-[55vh] bg-zinc-800 rounded-lg">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
          />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
            Get Boarded
          </button>
        </div>
        <div className="card relative flex items-center justify-center w-full h-[55vh] bg-zinc-900 rounded-lg">
          <img
            className="w-24"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
          />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
            Futur Academy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
