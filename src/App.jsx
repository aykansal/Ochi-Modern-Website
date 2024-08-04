import React from "react";
import {
  About,
  Eyes,
  Featured,
  LandingPage,
  Marquee,
  Navbar,
  Cards,
  Footer,
} from "./components";

function App() {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 min-h-screen w-full">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
