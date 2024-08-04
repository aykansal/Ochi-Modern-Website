import React from "react";
import { About, LandingPage, Marquee, Navbar } from "./components";

function App() {
  return (
    <div className="dark:bg-zinc-900 dark:text-zinc-50 min-h-screen w-full">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
    </div>
  );
}

export default App;
