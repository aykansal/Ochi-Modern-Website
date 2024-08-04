import React from "react";

const Navbar = () => {
  return (
    <div className="fixed z-[999] w-full px-20 py-8 font-['Neue Montreal'] flex justify-between items-center">
      <div className="logo">svg</div>
      <div className="links flex gap-10">
        {["Services", "Our Work", "About Us", "Insights", "Contacts"].map(
          (link, index) => (
            <a
              key={index}
              className={`font-light text-md capitalize ${index === 4 && "ml-40"}`}
              href=""
            >
              {link}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
