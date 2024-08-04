import React from "react";
import { About, Eyes, Featured, LandingPage, Marquee, Navbar,Cards } from "./components";

function App() {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 min-h-screen w-full">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes/>
      <Featured />
      <Cards />
    </div>
  );
}

export default App;
