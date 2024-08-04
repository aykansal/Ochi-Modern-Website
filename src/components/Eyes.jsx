import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let deltaX = e.clientX - window.innerWidth / 2;
      let deltaY = e.clientY - window.innerHeight / 2;
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); //to convert into radians
      setRotate(angle - 180);
    });
  });

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className="w-full h-full relative bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-cover bg-center ">
        <div className="flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="w-[15vw] h-[15vw] bg-zinc-100 flex justify-center items-center rounded-full "
            >
              <div className="h-2/3 w-2/3 bg-zinc-900 rounded-full flex justify-center items-center">
                <div
                  className="line w-full h-fit"
                  style={{
                    transform: ` rotate(${rotate}deg)`,
                  }}
                >
                  <div className="h-5 w-5 bg-zinc-100 rounded-full "></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Eyes;
