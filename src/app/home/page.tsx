import HeroSection from "@/components/HeroSection";
import Loader from "@/components/Loader";
import NavBar from "@/components/NavBar";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div className="bg-slate-400 text-white border-b-2 border-white ">
      <Suspense fallback={<Loader />}>
        <HeroSection />
      </Suspense>
    </div>
  );
};

export default page;
